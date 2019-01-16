import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistStore, persistCombineReducers } from 'redux-persist';

const config = {
  key: 'root',
  storage
}
const configureStore = preloadedState  => {
  let reducer = persistCombineReducers(config, reducers);
  let store = createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger)
    )
  );
  let persistor = persistStore(store);
  return { persistor, store };
};

const { persistor, store } = configureStore();

export {
  persistor,
  store,
};
