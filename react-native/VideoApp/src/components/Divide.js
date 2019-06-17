import React from 'react';
import {
  View,
} from 'react-native';
import {unitWidth} from '../utils/system'

export default class Divide extends React.Component {
  render () {
    const { height = 20} = this.props;
    return (
      <View style={{height: unitWidth * height}}/>
    )
  }
}
