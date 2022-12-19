import axios from "axios"

export const API = axios.create()

API.defaults.baseURL = 'http://localhost:8000'
API.defaults.timeout = 60000
API.defaults.headers.common['Content-Type'] = 'application/json'

axios.interceptors.request.use(function (config: any) {
    const token = sessionStorage.getItem('access');
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });