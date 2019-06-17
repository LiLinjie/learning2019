import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Link from '../Link';
import Icon from 'react-native-vector-icons/Ionicons';
import {unitWidth} from '../../utils/system'
import theme from '../../constants/theme'

export default class UCenterNav extends React.Component {
  render() {
    return (
      <View style={styles.navWrap}>
        <Link style={styles.navItem}>
          <View style={styles.navItemView}>
            <View style={styles.navItemLeft}>
              {/*<Image source={require('../../assets/images/icon_effect.png')}/>*/}
              <Text style={styles.navText}>观看记录</Text>
            </View>
            <Icon name={`ios-arrow-forward`} size={unitWidth * 40} color={theme.fontColor2}/>
          </View>
        </Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navWrap: {
    paddingLeft: unitWidth * 20,
    paddingRight: unitWidth * 20,
    backgroundColor: '#fff',
  },
  navItem: {
    height: unitWidth * 100,
    width: unitWidth * 710,
    borderBottomColor: theme.borderColor,
    borderBottomWidth: unitWidth,
  },
  navItemView: {
    height: unitWidth * 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navText: {
    marginTop: unitWidth * 15,
    fontSize: unitWidth * 28,
    color: theme.fontColor1,
  }
})
