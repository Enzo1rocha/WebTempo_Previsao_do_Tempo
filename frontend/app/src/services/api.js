// api.js
import axios from 'axios';
import AuthService from './authService';

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
});

// interceptor no api, mas refresh/logout no authApi:
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = true) => {
  failedQueue.forEach(p => (error ? p.reject(error) : p.resolve(token)));
  failedQueue = [];
};

api.interceptors.response.use(
  res => res,
  async error => {
    const req = error.config;

    // ignora refresh e logout
    if (
      req.url.includes('/api/auth/token/refresh') ||
      req.url.includes('/api/auth/logout')
    ) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !req._retry && error.response.data?.code === 'invalid_token') {
      window.dispatchEvent(new CustomEvent('auth-expired'))
    }

    if (error.response?.status === 401 && !req._retry) {
      if (isRefreshing) {
        return new Promise((res, rej) => failedQueue.push({ res, rej }))
          .then(() => api(req))
          .catch(err => Promise.reject(err));
      }

      req._retry = true;
      isRefreshing = true;
      try {
        // usa authApi aqui
        await authApi.post('/api/auth/token/refresh/', null, {
          withCredentials: true,
        });
        processQueue(null);
        return api(req);
      } catch (err) {
        processQueue(err);
        window.dispatchEvent(new CustomEvent('auth-expired'));
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
