import React from 'react';
import {
  View,
} from 'react-native';
import AppContainer from './navigation';
import * as services from './services/user';
import AsyncStorage from '@react-native-community/async-storage';

export default class Root extends React.Component {
  constructor (props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      const res = await services.getUserDetail();
      console.log(res);
      if (res.status === 1) {
        await AsyncStorage.setItem('userInfo', JSON.stringify(res.data));
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer/>
      </View>
    )
  }
}
