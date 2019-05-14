import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
  createSwitchNavigator,
  createStackNavigator, 
  createBottomTabNavigator, 
  createAppContainer, 
  StackViewTransitionConfigs,
} from 'react-navigation';
import Index from './pages/Index';
import Login from './pages/Login';
import UCenter from './pages/UCenter';
import Detail from './pages/Detail';
import Search from './pages/Search';
import theme from './constants/theme';


const tabTitle = (index) => {
  let title = '';
  switch (index) {
    case 0:
      title = '首页';
      break;
    case 1:
      title = '我的';
      break;
  }
  return title;
}

export const TabNavigator = createBottomTabNavigator(
  {
    Index: {
      screen: Index,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name={`ios-home`} size={24} color={tintColor}/>
        ),
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: '搜索',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name={`ios-search`} size={24} color={tintColor}/>
        ),
      }
    },
    UCenter: {
      screen: UCenter,
      navigationOptions: {
        tabBarLabel: '个人中心',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name={`ios-person`} size={24} color={tintColor}/>
        ),
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: theme.themeColor,
      inactiveTintColor: 'gray'
    },
  }
)

const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  var tranParams = transitionProps ? transitionProps.scene.route.params : undefined
  var prevParams = prevTransitionProps ? prevTransitionProps.scene.route.params : undefined
  if ((tranParams && !!tranParams['mode'] && tranParams['mode'] === 'modal') ||
      (prevParams && !!prevParams['mode'] && prevParams['mode'] === 'modal')) {
      if ((tranParams && tranParams['mode'] === 'push') || (prevParams && prevParams['mode'] === 'push')) {
        return StackViewTransitionConfigs.defaultTransitionConfig(transitionProps, prevTransitionProps, false);
      }
      return StackViewTransitionConfigs.defaultTransitionConfig(transitionProps, prevTransitionProps, true);
  } else {
    return StackViewTransitionConfigs.defaultTransitionConfig(transitionProps, prevTransitionProps, false);
  }
};

export const AppNavigator = createStackNavigator(
  {
    Tab: { screen: TabNavigator },
    Detail,
    Login,
  },
  {
    transitionConfig: dynamicModalTransition,
    cardOverlayEnabled: true
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
