import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator, NavigationActions, createAppContainer } from 'react-navigation';
import StackViewStyleInterpolator  from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import AppIntro from './pages/AppIntro';
import Launcher from './pages/Launcher';
import Index from './pages/Index';
import Search from './pages/Search';
import UCenter from './pages/UCenter';
import Login from './pages/Login';
import theme from './constants/theme';

export const INITIAL_AUTHEN_ROUTE_NAME = 'Tab';
export const INITIAL_UNAUTHEN_ROUTE_NAME = 'Login';
export const APPINTRO_ROUTE_NAME = 'AppIntro';

export const TabNavigator = createBottomTabNavigator({
  Index: {
    screen: Index,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon name={`ios-home`} size={24} color={tintColor}/>
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: '搜索',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon name={`ios-search`} size={24} color={tintColor}/>
      )
    }
  },
  UCenter: {
    screen: UCenter,
    navigationOptions: {
      tabBarLabel: '个人中心',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon name={`ios-person`} size={24} color={tintColor}/>
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: theme.themeColor,
    inactiveTintColor: 'gray'
  }
});

const AUTHEN_ROUTES = {
  [INITIAL_AUTHEN_ROUTE_NAME]: { screen: TabNavigator }
}

export function isAuthenRouteName (routeName) {
  return !!AUTHEN_ROUTES[routeName]
}

const UNAUTHEN_ROUTES = {
  Login: { screen: Login }
}

export function isUnauthenRouteName (routeName) {
  return !!UNAUTHEN_ROUTES[routeName]
}

const GLOBAL_SCREEN = {
  AppIntro: { screen: AppIntro }
}

export const AppNavigation = createStackNavigator({
  Launcher: { screen: Launcher },
  ...AUTHEN_ROUTES,
  ...UNAUTHEN_ROUTES,
  ...GLOBAL_SCREEN
}, {
  initialRouteName: 'AppIntro',
  header: null,
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal
  })
});

export default createAppContainer(AppNavigation);
