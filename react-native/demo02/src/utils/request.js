import qs from 'qs';
import AsyncStorage from '@react-native-community/async-storage';

const domain = 'https://restapi.xuanwonainiu.com';

async function request (method, url, body) {
  method = method.toLowerCase();
  const userToken = await AsyncStorage.getItem('userToken');

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'APPSession': userToken || ''
    }
  };

  if (url.indexOf('http') === -1) {
    url = domain + url;
  }

  if (['get', 'jsonp'].indexOf(method) >= 0 && body) {
    url = url.replace(/\?$/, '');
    if (/\?/.test(url)) {
      url += '&';
    } else {
      url += '?';
    }
    url += qs.stringify(body);
  } else {
    options.body = body && JSON.stringify(body);
  }

  let res;
  try {
    res = await fetch(url, options);
    if (res.status !== 200) {
      alert(res.statusText);
    }
    res = await res.json();
    console.log(res);
    if (res.status !== 1) {
      alert(res.msg);
    }
    return res;
  } catch (e) {
    console.error(e);
  }
}

function restApiRequest (method) {
  return request.bind(null, method);
}

export default request;
export const get = restApiRequest('get');
export const post = restApiRequest('post');
export const del = restApiRequest('delete');
export const put = restApiRequest('put');
