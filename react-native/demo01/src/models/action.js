import { START, STOP, RESET, RUN_TIMER } from './actionsTypes';

const startAction = () => ({ type: START });
const stopAction = () => ({ type: STOP });
const resetAction = () => ({ type: RESET });
const runTimeAction = () => ({ type: RUN_TIMER });

let t = -1;

export const start = () => {
  return dispatch => {
    dispatch(startAction());
    if (t !== -1) return;
    t = setInterval(() => {
      dispatch(runTimeAction());
    }, 1000);
  };
}

export const stop = () => {
  return dispatch => {
    dispatch(stopAction());
    if (t !== -1) {
      clearInterval(t);
      t = -1;
    }
  };
}

export const reset = () => {
  return dispatch => {
    dispatch(resetAction());
    dispatch(stop());
  };
}
