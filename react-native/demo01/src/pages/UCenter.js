import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';
import { unitWidth } from '../utils';

@connect(state => {
  return {
    // userInfo: state.getIn(['user', 'userInfo'])
    userInfo: state.user.userInfo
  }
}, (dispatch) => ({
  logout () {
    dispatch({ type: types.USER_LOGOUT_REQUEST });
  }
}))
export default class UCenter extends React.PureComponent {
  componentWillMount () {
    if (!this.props.userInfo) {
      this.props.navigation.navigate('Login');
    }
  }

  render () {
    const { userInfo } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#FEAA96","#FF0F4C"]}
          useAngle={true}
          angle={41}
          style={styles.top}
        >
          <View style={styles.topContent}>
            <Image source={{uri: userInfo.avatar}} style={styles.avatar}/>
            <View style={styles.info}>
              <Text style={styles.name}>{userInfo.nickName}</Text>
              <Text style={styles.tel}>手机号:{userInfo.userName}</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={[styles.center, {marginTop: unitWidth * 40}]}>
          <Button
            text="退出登录"
            onPress={() => this.props.logout()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    height: unitWidth * 378,
    padding: unitWidth * 35,
    paddingTop: unitWidth * 165
  },
  topContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: unitWidth * 140,
    height: unitWidth * 140,
    borderRadius: unitWidth * 140,
    marginRight: unitWidth * 30
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: unitWidth * 48,
    lineHeight: unitWidth * 48,
    marginBottom: unitWidth * 15,
    color: '#fff'
  },
  tel: {
    fontSize: unitWidth * 24,
    lineHeight: unitWidth * 34,
    color: '#fff'
  },
  center: {
    alignItems: 'center',
  }
})
