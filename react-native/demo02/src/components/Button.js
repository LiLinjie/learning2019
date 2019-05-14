import React from 'react';
import {
  TouchableHighlight,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class Button extends React.Component {
  render () {
    const { onPress, children } = this.props;
    return (
      <TouchableHighlight onPress={onPress} style={styles.btn}>
        { children }
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  btnText: {
    textAlign: 'center',
    color: '#000'
  }
})