import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { imgParser } from '../../../utils';

export default class Item extends React.Component {
  render() {
    return (
      <TouchableHighlight style={styles.item}>
        <View style={styles.img}>
          {
            item.imgUrl && (<Image source={{uri: imgParser(item.imgUrl, 240, 240)}} />)
          }
        </View>
        <View style={styles.info}>
          <View style={styles.title}>
            <Text>{ item.productName }</Text>
          </View>
          <View>
            <Text>{ item.productDesc }</Text>
          </View>
          <View>

          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({

})
