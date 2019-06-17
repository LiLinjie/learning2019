import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import {unitWidth} from '../../utils/system';
import Link from '../Link';
import theme from '../../constants/theme';

const videoApps = [
  {
    imgUrl: require('../../assets/images/tengxunshipin.png'),
    url: 'https://m.v.qq.com/',
    name: '腾讯视频'
  },
  {
    imgUrl: require('../../assets/images/iqiyi.png'),
    url: 'https://m.iqiyi.com/vip/',
    name: '爱奇艺'
  },
  {
    imgUrl: require('../../assets/images/youku.png'),
    url: 'http://youku.com/',
    name: '优酷'
  },
  {
    imgUrl: require('../../assets/images/mangguoTV.png'),
    url: 'https://m.mgtv.com',
    name: '芒果TV'
  },
  {
    imgUrl: require('../../assets/images/bilibili.png'),
    url: 'https://www.bilibili.com',
    name: '哔哩哔哩'
  },
]

export default class VideoMod extends React.Component {
  _toVideoPage (item) {
    const { userInfo, navigation } = this.props;
    if (userInfo) {
      navigation.navigate('VideoWebsite', { url: item.url})
    } else {
      alert('请登录！')
    }
  }
  render() {
    return (
      <View style={styles.mod}>
        <View style={styles.modHd}>
          <Image source={require('../../assets/images/hot.png')} style={styles.modHdImg} />
          <Text style={styles.modHdText}>VIP视频观看区</Text>
        </View>
        <View style={styles.modBd}>
          {
            videoApps.map((item, idx) => {
              return (
                <Link key={idx} style={styles.videoItem} onPress={() => this._toVideoPage(item)}>
                  <View style={styles.videoItemWrap}>
                    <Image source={item.imgUrl} style={styles.videoImg}/>
                    <Text style={styles.videoItemText}>{item.name}</Text>
                  </View>
                </Link>
              )
            })
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mod: {

  },
  modHd: {
    padding: unitWidth * 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modHdImg: {
    width: unitWidth * 50,
    height: unitWidth * 50,
  },
  modHdText: {
    marginLeft: unitWidth * 10,
    fontSize: unitWidth * 28,
    color: theme.fontColor,
  },
  modBd: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: unitWidth * 30,
    paddingRight: unitWidth * 30,
  },
  videoItem: {
    marginBottom: unitWidth * 20,
  },
  videoItemWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoImg: {
    width:  unitWidth * 80,
    height: unitWidth * 80,
  },
  videoItemText: {
    marginTop: unitWidth * 15,
    fontSize: unitWidth * 24,
    color: theme.fontColor1,
  }
})
