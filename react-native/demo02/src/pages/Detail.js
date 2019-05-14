import React from 'react';
import { 
  View,
  Text,
  Button,
} from 'react-native';

export default class Detail extends React.Component {
  static navigationOptions = {
    title: '详情页'
  }

  render () {
    return (
      <View>
        <Text>Detail Page</Text>
        <Button title="去首页" onPress={() => this.props.navigation.navigate('Index')}/>
      </View>
    )
  }
}