import { HTTP_METHOD } from '../utils/constants';
import request from '../utils/request';

const getCurrencyList = (params) => {
  return request({
      url:    'publish/currency/selected',
      method: HTTP_METHOD.GET,
      params
  });
}

const registerContract = (contract) => {
  return request({
    url: 'publish/contract/register',
    method: HTTP_METHOD.POST,
    data: contract
  });
}

const HomeService = {
    getCurrencyList,
    registerContract
}

export default HomeService;