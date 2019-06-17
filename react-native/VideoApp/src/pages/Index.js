import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Divide from '../components/Divide';
import Banner from '../components/Index/Banner';
import Notice from '../components/Index/Notice';
import VideoMod from '../components/Index/VideoMod';
import {NavigationEvents} from "react-navigation"
import AsyncStorage from '@react-native-community/async-storage';

export default class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userInfo: '',
      banner: [
        {
          imgUrl: require('../assets/images/banner.jpg')
        },
        {
          imgUrl: require('../assets/images/banner.jpg')
        }
      ]
    }
  }

  async _init () {
    const userInfo = await AsyncStorage.getItem('userInfo');
    if (userInfo) {
      this.setState({
        userInfo: JSON.parse(userInfo)
      });
    }
  }

  render() {
    const { banner, userInfo } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.wrap}>
        <NavigationEvents onWillFocus={payload => this._init()} />
        <Banner banner={banner}/>
        <Divide height="20"/>
        <Notice />
        <Divide height="20"/>
        <VideoMod navigation={navigation} userInfo={userInfo}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {

  }
})
