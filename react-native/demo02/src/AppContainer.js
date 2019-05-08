import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, Text, Button, Image } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./images/icon.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // title: 'Home'
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Text>{this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
          })}
        />
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
