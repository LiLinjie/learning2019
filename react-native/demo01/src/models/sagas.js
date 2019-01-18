import { fork } from 'redux-saga/effects';
import user from './users/saga';

export default function *rootSaga () {
  yield fork(user);
}
