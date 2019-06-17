import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';

export default class Link extends React.Component {
  render () {
    const { onPress, children, underlayColor = '#fff', ...restProps } = this.props;
    return (
      <TouchableHighlight onPress={onPress} underlayColor={underlayColor} activeOpacity={0.1} {...restProps}>
        { children }
      </TouchableHighlight>
    )
  }
}
