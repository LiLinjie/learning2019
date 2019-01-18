import React from 'react';
import { createAppContainer } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import AppContainer from './src/navigation';
import store from './src/models/store';


export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);


const App = reduxifyNavigator(AppContainer, 'root');

const mapStateToProps = (state) => ({
  state: state.nav, // nav -> state
})
const ConnectNavigator = connect(mapStateToProps)(App);

export default class ReduxNavigation extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectNavigator />
      </Provider>
    )
  }
}
