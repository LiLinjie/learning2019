import React from 'react';
import { View, StatusBar, Platform, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import AppNavigation from './navigation';
import {
  reduxifyNavigator
} from 'react-navigation-redux-helpers';

const App = reduxifyNavigator(AppNavigation, 'root');

@connect(state => {
  console.log(state);
  return {
    nav: state.nav
  }
})
export default class RootContainer extends React.PureComponent {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <App />
      </View>
    )
  }
}
