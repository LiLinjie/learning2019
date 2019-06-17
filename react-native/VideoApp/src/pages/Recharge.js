import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import BlockBtn from '../components/BlockBtn';
import theme from '../constants/theme';
import { unitWidth } from '../utils/system';

export default class Recharge extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      code: ''
    }
  }

  onChangeText (params) {
    this.setState(params);
  }

  _recharge () {
    console.log('立即开通')
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <TextInput
              style={styles.input}
              placeholder="在此处粘贴激活码"
              placeholderTextColor="#CCCCD1"
              onChangeText={(code) => this.onChangeText({code})}
            />
          </View>
        </View>
        <BlockBtn text='立即开通' onPress={() => this._recharge()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
