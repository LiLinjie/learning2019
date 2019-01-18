import { combineReducers } from 'redux';
import * as user from './users/reducer';
import nav from './nav/reducer';

export default combineReducers({
  nav,
  user: combineReducers(user)
});
