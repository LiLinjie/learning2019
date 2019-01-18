import * as types from '../../constants/actionTypes';

export function userInfo (state = '', { type, payload }) {
  switch (type) {
    case types.USER_INFO_SUCCESS:
      return payload;
    case types.USER_LOGOUT_REQUEST:
      return '';
    default:
      return state;
  }
}
