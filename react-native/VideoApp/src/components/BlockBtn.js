import React from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import Link from './Link';
import {unitWidth} from '../utils/system'

export default class BlockBtn extends React.Component {
  render() {
    const { text, ...restProps } = this.props;
    return (
      <Link {...restProps}>
        <ImageBackground source={require('../assets/images/btn.png')} style={styles.btn}>
          <Text style={styles.btnText}>{ text }</Text>
        </ImageBackground>
      </Link>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    width: unitWidth * 600,
    height: unitWidth * 116,
    paddingBottom: unitWidth * 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: unitWidth * 34,
    fontWeight: 'bold',
    color: '#fff'
  }
})
