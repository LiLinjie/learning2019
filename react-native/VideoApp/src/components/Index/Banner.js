import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Link from '../Link';
import SwiperComp from '../SwiperComp';
import {unitWidth} from '../../utils/system'

export default class Banner extends React.Component {
  render() {
    const { banner } = this.props;
    return (
      <View style={styles.banner}>
        {
          banner.length ?
            <SwiperComp>
              {
                banner.map((i, idx) => {
                  return (
                    <Link key={idx}>
                      <Image source={i.imgUrl} style={styles.bannerImg}/>
                    </Link>
                  )
                })
              }
            </SwiperComp>
            :
            <Link>
              <Image source={banner[0].imgUrl} style={styles.bannerImg}/>
            </Link>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    width: unitWidth * 750,
    height: unitWidth * 320,
  },
  bannerImg: {
    width: unitWidth * 750,
    height: unitWidth * 320,
  }
})
