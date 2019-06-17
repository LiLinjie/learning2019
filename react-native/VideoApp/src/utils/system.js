import {
  Dimensions,
  Platform,
  PixelRatio,
  StatusBar,
  Linking,
} from 'react-native';

// 设计图尺寸
const designWidth = 750;

// 手机屏幕
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

// 计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = width / designWidth;

export const statusBarHeight = getStatusBarHeight();

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
  return Platform.OS === 'ios' && (height === X_HEIGHT && width === X_WIDTH)
}

//状态栏的高度
export function getStatusBarHeight() {
  if (Platform.OS === 'android') return StatusBar.currentHeight;
  if (isIphoneX()) {
    return 44
  }
  return 20
}
