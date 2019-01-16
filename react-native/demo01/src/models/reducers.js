import { combineReducers } from 'redux';
import { START, STOP, RESET, RUN_TIMER } from './actionsTypes';

const defaultState = {
  seconds: 0,
  runStatus: false
}

function timer (state = defaultState, action) {
  switch (action.type) {
    case START:
      return { ...state, runStatus: true };
    case STOP:
      return { ...state, runStatus: false };
    case RESET:
      return { ...state, seconds: 0 };
    case RUN_TIMER:
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
}

export default combineReducers({
  timer
});
