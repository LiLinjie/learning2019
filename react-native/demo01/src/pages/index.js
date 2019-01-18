import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as types from '../constants/actionTypes';

@connect(state => {
  return {

  }
}, (dispatch) => ({
  jump (name) {
    dispatch({
      type: types.JUMP_TO,
      payload: name
    })
  }
}))
export default class Index extends React.PureComponent {
  render () {
    return (
      <View>
        <Text>首页</Text>
        <Button onPress={() => this.props.jump('Search')} title='跳转'/>
      </View>
    )
  }
}
