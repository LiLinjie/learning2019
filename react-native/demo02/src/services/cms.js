import { get, post } from '../utils/request';

export function getCms (params) {
  return post('http://qf-bos.xuanwonainiu.com/h5/active-page', params);
}

export function getProSearch (params) {
  return post('http://restapi.xuanwonainiu.com/product/cms/list/search', params);
}
