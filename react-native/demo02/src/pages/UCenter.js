import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import { unitWidth } from '../utils';

export default class UCenter extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props);
    this.state = {
      userInfo: '',
    }
  }
  async componentDidMount () {
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
    const { userInfo } = this.state;
    return (
      <View>
        <LinearGradient
          colors={["#FEAA96","#FF0F4C"]}
          useAngle={true}
          angle={41}
          style={styles.top}
        >
          <View style={styles.topContent}>
            <View style={styles.avatarView}>
              <Image source={{uri: userInfo.avatar}} style={styles.avatar}/>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{userInfo.nickName}</Text>
              <Text style={styles.tel}>手机号:{userInfo.userName}</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={[styles.center, {marginTop: unitWidth * 40}]}>
          <Button onPress={() => this.logout()}>
            <Text style={styles.btnText}>退出登录</Text>
          </Button>
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
  },
  btnText: {
    textAlign: 'center',
    fontSize: unitWidth * 30,
    color: '#000'
  }
})