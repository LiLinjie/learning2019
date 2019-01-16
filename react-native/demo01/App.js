import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Home from './src/navigation';
import PageLoading from './src/components/PageLoading';
import { persistor, store } from './src/models/store';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<PageLoading/>}
          persistor={persistor}
        >
          <Home/>
        </PersistGate>
      </Provider>
    )
  }
}
