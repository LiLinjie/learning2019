import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BlockBtn from '../components/BlockBtn';
import Link from '../components/Link';
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../constants/theme';
import { unitWidth, statusBarHeight } from '../utils/system';
import * as services from '../services/user';

export default class Index extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props);
    this.state = {
      userInfo: '',
      userName: '',
      code: '',
      inviteCode: ''
    }
  }

  onChangeText (params) {
    this.setState(params);
  }

  async getRegCode () {
    const { userName } = this.state;
    if (!userName) {
      alert('请输入手机号！');
      return;
    }
    const res = await services.getReg({userName});
    console.log(res);
    if (res.status === 1) {
      alert('短信已发送，请注意查收！');
    }
  }

  async login () {
    const { userName, code, inviteCode } = this.state;
    if (!userName) {
      alert('请输入手机号！');
      return;
    }
    if (!code) {
      alert('请输入验证码！');
      return;
    }
    const res = await services.register({ userName, code, inviteCode });
    if (res.status === 1) {
      await AsyncStorage.setItem('userToken', res.data.token);
      const resUser = await services.getUserDetail();
      if (resUser.status === 1) {
        await AsyncStorage.setItem('userInfo', JSON.stringify(resUser.data));
      }
      setTimeout(() => {
        this.props.navigation.goBack();
      }, 1000)
    }
  }

  _close () {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.loginWrapper}>
          <Link onPress={() => this._close()} style={styles.closeBtn}>
            <Icon name={`ios-close`} size={100 * unitWidth } color={theme.themeColor}/>
          </Link>
          <View style={styles.hd}>
            <Text style={styles.hdText}>用户登录</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <TextInput
                keyboardType="phone-pad"
                style={styles.input}
                placeholder="请输入手机号"
                placeholderTextColor="#CCCCD1"
                onChangeText={(userName) => this.onChangeText({userName})}
              />
            </View>
            <View style={styles.formItem}>
              <TextInput
                // style={styles.input}
                placeholder="请输入验证码"
                placeholderTextColor="#CCCCD1"
                onChangeText={(code) => this.onChangeText({code})}
              />
              <Link onPress={() => this.getRegCode()}>
                <Text style={styles.codeText}>获取验证码</Text>
              </Link>
            </View>
          </View>
          <BlockBtn text='登录' onPress={() => this.login()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ACACAC'
  },
  loginWrapper: {
    position: 'relative',
    marginTop: statusBarHeight,
    padding: unitWidth * 85,
    paddingTop: unitWidth * 134,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: unitWidth * 20,
    borderTopRightRadius: unitWidth * 20
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: unitWidth * 30,
  },
  hd: {
    justifyContent: 'center',
    width: unitWidth * 170,
    marginBottom: unitWidth * 14,
    borderBottomColor: theme.themeColor,
    borderBottomWidth: unitWidth * 3,
  },
  hdText: {
    fontSize: unitWidth * 40,
    lineHeight: unitWidth * 56,
    color: '#000'
  },
  form: {
    height: unitWidth * 300,
    marginBottom: unitWidth * 80
  },
  formItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: unitWidth * 140,
    paddingTop: unitWidth * 42,
    borderBottomColor: theme.borderColor,
    borderBottomWidth: 1
  },
  input: {
    fontSize: unitWidth * 30,
  },
  codeText: {
    color: theme.themeColor,
    fontSize: unitWidth * 24
  },
  btn: {

  }
})
