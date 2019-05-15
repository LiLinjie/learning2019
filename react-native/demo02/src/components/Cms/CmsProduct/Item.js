import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { imgParser, unitWidth, getShowPrice, getOwnCommission } from '../../../utils';
import theme from '../../../constants/theme'

export default class Item extends React.Component {
  render() {
    const { item } = this.props;
    let {
      id,
      imgUrl,
      name,
      sales,
      couponPrice,
      price,
      discountPrice,
      platform,
      couponStartFee,
      platType,
      commissionAmount,
      imageUrl,
      prodName,
      currencyUnit,
      salesPrice,
      promotionPrice,
      salesQuantity,
      sourcePlatType,
      startfee,
      productDesc,
    } = item;

    if (currencyUnit === 'YUAN') {
      imgUrl = imageUrl ? imageUrl : ''
      name = prodName ? prodName : ''
      couponPrice = couponPrice * 100
      price = salesPrice * 100
      discountPrice = promotionPrice * 100
      sales = salesQuantity
      couponStartFee = startfee
    }


    return (
      <View style={styles.item}>
        {
          !!imgUrl && (<Image source={{uri: imgParser(imgUrl, 240, 240)}} style={styles.img} />)
        }
        <View style={styles.info}>
          <View style={styles.row1}>
            <Text style={styles.titleText} numberOfLines={1}>{ name }</Text>
          </View>
          <View style={styles.row2}>
            <View style={styles.coupon}>
              <Text style={styles.couponText}>券: { getShowPrice(couponPrice) }元</Text>
            </View>
          </View>
          <View style={styles.row3}>
            <Text style={styles.salesText}>销量: { sales }</Text>
            <Text style={styles.priceText}>
              券后:
              <Text style={styles.discountPriceText}>¥{ getShowPrice(discountPrice) } </Text>
              <Text style={styles.oldPrice}>¥{ getShowPrice(price)}</Text>
            </Text>
          </View>
          <View style={styles.rate}>
            <Text style={styles.rateText}>赚¥{ getOwnCommission(item, {}, currencyUnit !== 'YUAN')}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: unitWidth * 30,
    paddingBottom: unitWidth * 30,
    borderBottomWidth: unitWidth,
    borderBottomColor: '#ebebeb'
  },
  img: {
    width: unitWidth * 240,
    height: unitWidth * 240,
    borderRadius: unitWidth * 10,
  },
  info: {
    position: 'relative',
    width: unitWidth * 430
  },
  row1: {

  },
  titleText: {
    fontSize: unitWidth * 28,
    lineHeight: unitWidth * 38,
    color: theme.fontColor,
    marginBottom: unitWidth * 10
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coupon: {
    paddingLeft: unitWidth * 20,
    paddingRight: unitWidth * 20,
    fontSize: unitWidth * 24,
    backgroundColor: '#ffdbdb',
    borderRadius: unitWidth * 6
  },
  couponText: {
    color: theme.themeColor,
    lineHeight: unitWidth * 40,
  },
  row3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  salesText: {
    color: theme.fontColor2,
    fontSize: unitWidth * 26,
  },
  priceText: {
    color: theme.fontColor1,
    fontSize: unitWidth * 24,
  },
  discountPriceText: {
    color: theme.themeColor,
    fontSize: unitWidth * 40,
    fontWeight: 'bold',
  },
  oldPrice: {
    color: theme.fontColor2,
    fontSize: unitWidth * 26,
    textDecorationLine: 'line-through'
  },
  rate: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  rateText: {
    color: theme.themeColor,
    fontSize: unitWidth * 24,
  }
})
