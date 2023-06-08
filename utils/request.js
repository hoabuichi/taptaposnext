import http from './http';
import { toast } from 'react-toastify';

/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
  const onSuccess = function(response) {
    console.debug('Request Successful!', response);
    return response.data;
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config);
    
    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    // Toast request error
    let errorMsgs = error.response.data.error_message || ["Something went wrong"];
    errorMsgs.forEach(element => {
      if (element.message) {
        toast.error(element.message);
      } else {
        toast.error(element);
      }
    });


    return Promise.reject(error.response || error.message);
  }

  return http(options)
            .then(onSuccess)
            .catch(onError);
}

export default request;