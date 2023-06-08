import axios from 'axios';

// Set config defaults when creating the instance
const http = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT + "/api/v1/"
});

// Add a request interceptor
http.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default http;