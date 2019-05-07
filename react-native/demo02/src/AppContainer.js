import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
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
