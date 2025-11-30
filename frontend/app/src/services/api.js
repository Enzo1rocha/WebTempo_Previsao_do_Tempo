// api.js
import axios from 'axios';

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (originalRequest.url.includes('/api/auth/token/refresh')) {
      if (error.response?.status == 429) {
        alert('Cuidado, voce está tentando renovar um token muitas vezes, aguarde um instante...')
        
      }
      processQueue(error)
      window.dispatchEvent(new CustomEvent('auth-expired'));
      return Promise.reject(error);
    }

    // Se o erro não for 401, ou já for uma tentativa, ou for na rota de refresh, rejeita.
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => api(originalRequest))
        .catch(err => Promise.reject(err));
    };

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      console.log("Access Token expirado. Tentando renovar...");
      const response = await authApi.post('/api/auth/token/refresh/', null);  

      processQueue(null); 
    
      return api(originalRequest);

    } catch (err) {
      processQueue(err);
      window.dispatchEvent(new CustomEvent('auth-expired'));
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  }
);