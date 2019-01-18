import React from 'react';
import { View } from 'react-native';
import Loading from './PageLoading';

export default class Root extends React.PureComponent {
  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.children}
        <Loading/>
      </View>
    )
  }
}
