import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native'
import { NavigationEvents } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import BlockBtn from '../components/BlockBtn';
import Header from '../components/UCenter/Header';
import UCenterNav from '../components/UCenter/UCenterNav';
import Divide from '../components/Divide';
import { unitWidth } from '../utils/system';

export default class UCenter extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props);
    this.state = {
      userInfo: '',
      amountData: 0,
      effectAmount: 0,
      monthEffectAmount: 0,
      teamCount: 0,
    }
  }

  async _init () {
    const userInfo = await AsyncStorage.getItem('userInfo');
    if (userInfo) {
      this.setState({
        userInfo: JSON.parse(userInfo)
      });
    } else {
      setTimeout(() => {
        this.props.navigation.navigate('Login', {'mode': 'modal'});
      }, 100);
    }
  }

  async logout () {
    console.log('退出登录');
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login', {'mode': 'modal'});
  }

  render () {
    const { userInfo, ...resetState } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.wrap}>
        <NavigationEvents onWillFocus={payload => this._init()} />
        <View style={styles.wrap}>
          <Header userInfo={userInfo} navigation={navigation}/>
          <Divide height='100' />
          <UCenterNav />
          {/*<Divide />*/}
          <Divide height="40"/>
          <BlockBtn onPress={() => this.logout()} text="退出登录" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center'
  },
  center: {
    alignItems: 'center',
  },
  videoItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoImg: {
    width:  unitWidth * 100,
    height: unitWidth * 100,
  },
  videoItemText: {
    marginTop: unitWidth * 10,
  }
})
