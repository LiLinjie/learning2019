import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/actionTypes';
import { unitWidth, statusBarHeight } from '../utils';
import theme from '../constants/theme';
import Button from '../components/Button';

@connect(state => {
  return {
    // userInfo: state.get('user').toJS()
    userInfo: state.user
  }
}, (dispatch) => ({
  login (payload) {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
      payload
    });
  },
  getReg (payload) {
    dispatch({
      type: types.USER_REG_REQUEST,
      payload
    });
  }
}))
export default class Login extends React.PureComponent {
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

  componentWillMount () {
    console.log('login UserInfo', this.props.userInfo);
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!', this.props.userInfo)
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!', this.props.userInfo);
  }

  onChangeText (params) {
    this.setState(params);
  }

  async login () {
    const { userName, code, inviteCode } = this.state;
    this.props.login({ userName, code, inviteCode });
    // const res = await service.register({userName, code, inviteCode});
    // if (res.status === 1) {
    //   await AsyncStorage.setItem('userToken', res.data.token);
    //   // this.props.navigation.navigate('AuthLoading');
    // }
  }

  async getRegCode () {
    const { userName } = this.state;
    this.props.getReg({userName});
    // const res = await service.getReg({userName});
    // console.log(res);
    // if (res.status === 1) {
    //   alert('短信已发送，请注意查收！');
    // }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.loginWrapper}>
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
                style={styles.input}
                placeholder="请输入验证码"
                placeholderTextColor="#CCCCD1"
                onChangeText={(code) => this.onChangeText({code})}
              />
              <TouchableHighlight onPress={() => this.getRegCode()}>
                <Text style={styles.codeText}>获取验证码</Text>
              </TouchableHighlight>
            </View>
          </View>
          <Button
            onPress={() => this.login()}
            text="登录"
          />
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
    marginTop: statusBarHeight,
    padding: unitWidth * 85,
    paddingTop: unitWidth * 134,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: unitWidth * 20,
    borderTopRightRadius: unitWidth * 20
  },
  hd: {
    width: unitWidth * 163,
    marginBottom: unitWidth * 14,
    borderBottomColor: theme.themeColor,
    borderBottomWidth: unitWidth * 3
  },
  hdText: {
    fontSize: unitWidth * 40,
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
    height: unitWidth * 98,
    fontSize: unitWidth * 30
  },
  codeText: {
    color: '#FF7896',
    fontSize: unitWidth * 24
  }
})
