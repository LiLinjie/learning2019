import { get, post } from '../utils/request';

export function register (params) {
  return post('/agent/appUserLogin', {isApp: true, domain: 49, ...params});
}

export function getReg (params) {
  return post('/agent/sms/reg', {isApp: 1, domain: 49, ...params});
}

export function getUserDetail () {
  return post('/agent/newUser/detail', {});
}

export function getHomeData () {
  return post('/agent/data/personHome', {});
}

export function getAmountData () {
  return post('/agent/data/personAmount', {});
}
