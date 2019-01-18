import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { View, Text, H1, Button } from 'native-base';
import Swiper from 'react-native-swiper';
import theme from '../constants/theme';
import * as types from '../constants/actionTypes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

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
export default class AppIntro extends React.Component {

  render () {
    return (
      <View style={{flex: 1}}>
        <Swiper
          loop={false}
          dotColor="white"
          activeDotColor={theme.themeColor}
        >
          <View style={[styles.container, { backgroundColor: 'yellow' }]}>
            <H1>App Intro 1</H1>
          </View>
          <View style={[styles.container, { backgroundColor: 'blue' }]}>
            <H1>App Intro 2</H1>
          </View>
          <View style={[styles.container, { backgroundColor: 'pink' }]}>
            <Button full onPress={() => this.props.jump('Index')}>
              <Text>App Intro 2</Text>
            </Button>
          </View>
        </Swiper>
      </View>
    )
  }
}
