import React from 'react';
import { View, Text } from 'react-native';

export default class Launcher extends React.PureComponent {
  componentDidMount () {
    console.log(this.props.navigation);
  }

  render () {
    return (
      <View>
        <Text>Launcher</Text>
      </View>
    )
  }
}
