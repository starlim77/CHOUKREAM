import axios from 'axios';
import { getCookieToken } from '../storage/Cookie';
import { setRefreshToken } from './storage/Cookie.js';

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json",
    },
  });


  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
  
      if (originalConfig.url !== "/auth/signin" && err.response) {
        // Access Token 만료
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
  
          try {
            const rs = await instance.post("/refresh", {
              refreshToken: getCookieToken(),
            });
  
            localStorage.setItem('accessToken', rs.data.accessToken);
            setRefreshToken(rs.data.refreshToken);
  
            return instance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
  
      return Promise.reject(err);
    }
  );
  
  export default instance;