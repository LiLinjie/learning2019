import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, Text } from 'react-native';

class HomeScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    )
  }
}

const AppContainer = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppContainer);
