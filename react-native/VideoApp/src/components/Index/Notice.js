import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {unitWidth} from '../../utils/system';
import theme from '../../constants/theme';

export default class Banner extends React.Component {
  render() {
    return (
      <View style={styles.notice}>
        <Icon name={`ios-volume-low`} size={ unitWidth * 60} color={theme.themeColor}/>
        <Text style={styles.noticeText}>遇到播放问题，可以切换线路进行播放，电视投屏请选择线路2！</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notice: {
    padding: unitWidth * 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noticeText: {
    marginLeft: unitWidth * 10,
    fontSize: unitWidth * 24,
    color: theme.fontColor
  }
})
