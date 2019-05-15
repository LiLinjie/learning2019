import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Item from './Item';
import { unitWidth } from '../../../utils';

export default class List extends React.Component {
  render () {
    const { list } = this.props;
    return (
      <View style={styles.productList}>
        {
          list.map((i, idx) => {
            return (
              <Item item={i} key={idx}/>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  productList: {
    paddingLeft: unitWidth * 30,
    paddingRight: unitWidth * 30,
  }
})
