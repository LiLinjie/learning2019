import * as types from '../../constants/actionTypes';
import { delay } from 'redux-saga';
import { takeLatest, put, call, fork, take } from 'redux-saga/effects';
import * as service from '../../services/user';
import {AsyncStorage} from 'react-native';
import { NavigationActions  } from 'react-navigation';

// 获取用户信息
function *getUser () {
  try {
    const res = yield call(service.getUserDetail);
    if (res.status === 1) {
      yield put({
        type: types.USER_INFO_SUCCESS,
        payload: res.data
      });
    } else {
      yield put({ type: types.USER_INFO_REQUEST });
    }
  } catch (e) {
    yield put({ type: types.USER_INFO_REQUEST });
  }
}

// 登录
function *login ({ payload }) {
  try {
    const res = yield call(service.register, payload);
    if (res.status === 1) {
      yield call(AsyncStorage.setItem, 'userToken', res.data.token);
      yield put({ type: types.USER_INFO_REQUEST });
      alert('登录成功！');
      yield call(delay, 1000);
      yield put(NavigationActions.navigate({routeName: 'UCenter'}));
    }
  } catch (e) {
    yield put({ type: types.USER_LOGIN_FAILURE });
  }
}

// 获取验证码
function *getReg ({ payload }) {
  try {
    const res = yield call(service.getReg, payload);
    console.log('res', res);
    if (res.status === 1) {
      alert('短信已发送，请注意查收！');
    }
  } catch (e) {
    yield put({ type: types.USER_REG_FAILURE });
  }
}

// 获取验证码
function *logout () {
  yield call(AsyncStorage.clear);
  yield put(NavigationActions.navigate({routeName: 'Login'}));
}

function *jumpTo ({ payload }) {
  yield put(NavigationActions.navigate({routeName: payload}));
}

export default function *() {
  yield takeLatest(types.USER_LOGIN_REQUEST, login);
  yield takeLatest(types.USER_INFO_REQUEST, getUser);
  yield takeLatest(types.USER_REG_REQUEST, getReg);
  yield takeLatest(types.USER_LOGOUT_REQUEST, logout);
  yield takeLatest(types.JUMP_TO, jumpTo);
}
