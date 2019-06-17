import React from 'react';
import Swiper from 'react-native-swiper';
import theme from '../constants/theme';

export default class SwiperComp extends React.Component {
  render() {
    const { children, ...restProps } = this.props;
    return (
      <Swiper
        dotColor="white"
        activeDotColor={theme.themeColor}
        paginationStyle={{bottom: 10}}
        {...restProps}
      >
        { children }
      </Swiper>
    )
  }
}
