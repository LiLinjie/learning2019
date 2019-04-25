import React, {Component} from 'react';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';
import PageLoading from './components/PageLoading';
import store from './models/store';
import { StyleProvider, Root } from 'native-base';

export default class App extends Component {
  render () {
    return (
      <StyleProvider>
        <Provider store={store}>
          <Root>
            <RootContainer/>
          </Root>
        </Provider>
      </StyleProvider>
    )
  }
}
