import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Clipboard,
  StyleSheet,
} from 'react-native';
import Link from '../../components/Link';
import theme from '../../constants/theme'
import {unitWidth} from '../../utils/system'

export default class Header extends React.Component {
  _recharge() {
    const { navigation } = this.props;
    navigation.navigate('Recharge');
  }

  render() {
    const { userInfo } = this.props;
    return (
      <ImageBackground source={require('../../assets/images/ucenter_bg.png')} style={styles.top}>
        <View style={styles.topContent}>
          <View style={styles.avatarView}>
            <Image source={{uri: userInfo.avatar}} style={styles.avatar}/>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{userInfo.userName}</Text>
            <View style={{flexDirection: 'row'}}>
              <Link onPress={() => this._recharge()}>
                <View style={styles.copyBtn}>
                  <Text style={styles.copyBtnText}>充值</Text>
                </View>
              </Link>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    width: unitWidth * 750,
    height: unitWidth * 378,
    padding: unitWidth * 35,
    paddingTop: unitWidth * 128
  },
  topContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarView: {
    width: unitWidth * 140,
    height: unitWidth * 140,
    borderRadius: unitWidth * 140,
    marginRight: unitWidth * 30,
    overflow: 'hidden'
  },
  avatar: {
    width: unitWidth * 140,
    height: unitWidth * 140,
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: unitWidth * 48,
    fontWeight: 'bold',
    lineHeight: unitWidth * 48,
    marginBottom: unitWidth * 15,
    color: '#fff'
  },
  superInviteCode: {
    fontSize: unitWidth * 24,
    lineHeight: unitWidth * 34,
    color: '#F8E71C',
  },
  code: {
    fontSize: unitWidth * 24,
    lineHeight: unitWidth * 34,
    color: '#fff'
  },
  copyBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: unitWidth * 40,
    width: unitWidth * 76,
    marginLeft: unitWidth * 20,
    borderWidth: unitWidth,
    borderColor: '#fff',
    borderRadius: unitWidth * 40
  },
  copyBtnText: {
    color: '#fff',
    fontSize: unitWidth * 24,
  }
})
