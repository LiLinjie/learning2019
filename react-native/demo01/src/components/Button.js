import React from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';

export default class Button extends React.Component {
  render() {
    const { onPress, text = '确定' } = this.props;
    return (
      <TouchableHighlight onPress={onPress} style={styles.btn}>
        <Text style={styles.btnText}>{ text }</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
  },
  btnText: {
    textAlign: 'center'
  }
})
