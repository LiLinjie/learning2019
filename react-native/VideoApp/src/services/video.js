import { get, post } from '../utils/request';

export function getVLink () {
  return get('http://fun.iyolla.com/login/login/imei.html?uid=3656');
}
