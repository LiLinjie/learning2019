import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Link from '../Link';
import {unitWidth} from '../../utils/system';
import theme from '../../constants/theme';

export default class Picker extends React.Component {

  render() {
    const { datas, isShow, navigation, _selectItem, _cancel } = this.props;
    return (
      isShow && (
        <View style={styles.pickerWrap}>
          <Link style={styles.mask} onPress={_cancel}><View/></Link>
          <View style={styles.pickerContent}>
            <View style={styles.pickerHd}><Text style={styles.pickerHdText}>影视VIP线路</Text></View>
            <View style={styles.pickerBd}>
              {
                datas.map((item, index) => {
                  if (index < 5) {
                    return (
                      <Link style={styles.pickerItem} onPress={() => _selectItem(index)} key={index}>
                        <Text style={styles.pickerText}>VIP线路{index + 1}</Text>
                      </Link>
                    )
                  }
                })
              }
            </View>
            <View style={styles.pickerFt}>
              <Link onPress={_cancel}>
                <Text style={{...styles.pickerText, fontWeight: 'bold'}}>取消</Text>
              </Link>
            </View>
          </View>
        </View>
      )
    )
  }
}

const styles = StyleSheet.create({
  pickerWrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: .5
  },
  pickerContent: {
    position: 'absolute',
    bottom: unitWidth * 20,
    left: unitWidth * 20,
    right: unitWidth * 20,
    textAlign: 'center',
  },
  pickerHd: {
    alignItems: 'center',
    justifyContent: 'center',
    height: unitWidth * 90,
    backgroundColor: 'white',
    borderTopLeftRadius: unitWidth * 20,
    borderTopRightRadius: unitWidth * 20,
  },
  pickerHdText: {
    fontSize: unitWidth * 24,
    color: theme.fontColor2,
  },
  pickerBd: {
    borderBottomLeftRadius: unitWidth * 20,
    borderBottomRightRadius: unitWidth * 20,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  pickerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: theme.borderColor,
    borderTopWidth: unitWidth,
    height: unitWidth * 100,
  },
  pickerText: {
    color: '#3a8dff',
    fontSize: unitWidth * 36,
  },
  pickerFt: {
    marginTop: unitWidth * 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: unitWidth * 100,
    backgroundColor: 'white',
    borderRadius: unitWidth * 20,
  }
})
