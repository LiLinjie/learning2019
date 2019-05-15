import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native';

// 设计图尺寸
const designWidth = 750;
const designHeight = 1334;

// 手机屏幕
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

//计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = width / designWidth;
//计算手机屏幕高度对应设计图高度的单位高度
export const unitHeight = height / designHeight;

export const statusBarHeight = getStatusBarHeight();
export const safeAreaViewHeight = isIphoneX() ? 34 : 0
//标题栏的高度
export const titleHeight = unitWidth * 100 + statusBarHeight;

//字体缩放比例，一般情况下不用考虑。
// 当应用中的字体需要根据手机设置中字体大小改变的话需要用到缩放比例
export const fontscale = PixelRatio.getFontScale();

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  return Platform.OS == 'ios' && (height == X_HEIGHT && width == X_WIDTH)
}

//状态栏的高度
export function getStatusBarHeight() {
  if (Platform.OS == 'android') return StatusBar.currentHeight;
  if (isIphoneX()) {
    return 44
  }
  return 20
}

// 图片处理
export function imgParser (url, width, height, format = 'jpg', q = 90, mode = 0) {
  if (!url) {
    return;
  }

  // if (!~url.indexOf('img.alicdn.com')) return url; // 如果不是阿里cdn的图片，则不处理
  if (~url.indexOf('img.alicdn.com') || ~url.indexOf('gw.alicdn.com')) {
    if (url.match(/_(\d*)x(\d*).*\./)) return url; // 如果已经添加过规则的，则不处理
    //if (width === void 0 || height === void 0) return url; // 如果没有提供宽高属性也不处理
    let ret = `${url}_`;
    if (width !== void 0 && height !== void 0) {
      ret += `${width}x${height}`;
    }
    ret += `q${q}.${format}`;
    return ret;
  } else if (~url.indexOf('img-prod.kkkd.com') || ~url.indexOf('xaya.qiniudn.com')) {
    let targetUrl;
    let thumbnail = '';
    let gravityCrop = '';
    let q = '';
    // 如果有设置宽高则取缩略图
    if (width || height) {
      thumbnail = `/thumbnail/${width}x${height}`;
    }
    // 如果宽高都有设置，则截取
    if (width && height && mode === 1) {
      gravityCrop = `/gravity/Center/crop/${width}x${height}`;
    }

    if (q) {
      q = `/quality/${q}`;
    } else {
      let qValue;
      qValue = {
        '2g': 50,
        '3g': 60,
        '4g': 80,
        'wifi': 90
      }[window.support.networkType] || 90;
      q = `/quality/${qValue}`;
    }

    targetUrl = `${url}?imageMogr2/auto-orient/strip${gravityCrop}${thumbnail}${q}/interlace/1`;
    return targetUrl;
  } else {
    return url;
  }
}

export function getShowPrice (price) {
  const _price = ((price / 100) + '').indexOf('.') > -1 ? (price / 100).toFixed(2) : (price / 100);
  return _price;
}

export function getOwnRate (product, userInfo, fromCms = false) {
  let ret = 0;
  const scale = fromCms ? 100 : 1;
  try {
    const { rate = 0.468 } = userInfo;
    const { commissionRate } = product;
    if (rate && commissionRate) {
      ret = (commissionRate * rate / scale).toFixed(2);
    }
  } catch (e) {
    console.log(e);
  }
  return ret;
}

export function getOwnCommission (product, userInfo, fromCms = false) {
  let ret = 0;
  const scale = fromCms ? 100 : 1;
  try {
    const { rate = 0.468 } = userInfo;
    const dlCommissionRate = getOwnRate(product, userInfo, fromCms);
    const { commissionAmount, discountPrice, commissionRate, promotionPrice, es } = product;
    if (rate && commissionRate) {
      if (commissionAmount) {
        ret = (commissionAmount * rate / scale).toFixed(1);
      } else if (discountPrice) {
        ret = (discountPrice * dlCommissionRate * 0.01 / 100).toFixed(1);
      } else if (!es) {
        ret = (promotionPrice * dlCommissionRate * 0.01 ).toFixed(1);
      } else {
        ret = '未知';
      }
    }
  } catch (e) {

  }
  return ret;
}
