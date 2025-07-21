import axios from 'axios'

const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
     withCredentials: true,
     timeout: 10000,
});

api.interceptors.response.use(
     (response) => {
          return response
     },
     async (error) => {
          if (error.response?.status === 401) {
               window.dispatchEvent(new CustomEvent('auth-expired'));
          }
          return Promise.reject(error);
     }
)

export default api;