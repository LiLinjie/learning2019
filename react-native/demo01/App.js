import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Home from './src/home';
import store from './src/models/store';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
