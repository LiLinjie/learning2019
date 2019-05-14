import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const dataSort = [{
  type: 'ALL',
  text: '综合排序'
}, {
  type: 'SALES',
  text: '销量'
}, {
  type: 'PROMOTION_PRICE',
  text: '价格'
}, {
  type: 'COUPON_PRICE',
  text: '优惠金额'
}];

export default class ModSort extends React.Component {
  render() {
    return (
      <View>
        {
          dataSort.map((item, index) => {
            const className = {

            };
            return (
              <View>
                <Text>{ item.text }</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}
