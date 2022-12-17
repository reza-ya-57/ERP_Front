import axios from "axios"

export const instance = axios.create()

instance.defaults.baseURL = 'http://localhost:8000'
instance.defaults.timeout = 60000


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