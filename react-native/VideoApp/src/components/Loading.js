import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import theme from '../constants/theme';
import {unitWidth} from '../utils/system'

export class PageLoading extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={theme.themeColor}/>
      </View>
    )
  }
}

export class WebViewLoading extends React.Component {
  render() {
    const { progress } = this.props;
    return (
      <View style={{position:'absolute', top: 0, left: 0, height: unitWidth * 5, width: unitWidth * 750, backgroundColor: theme.barColor}}>
        <View style={{height: unitWidth * 5, width: unitWidth * 750 * progress, backgroundColor: theme.themeColor, }} />
      </View>
    )
  }
}
