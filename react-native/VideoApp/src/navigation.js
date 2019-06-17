import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  StackViewTransitionConfigs,
} from 'react-navigation';
import Index from './pages/Index';
import Login from './pages/Login';
import UCenter from './pages/UCenter';
import VideoWebsite from './pages/VideoWebsite';
import VideoPlay from './pages/VideoPlay';
import Recharge from './pages/Recharge';
import theme from './constants/theme';
import AsyncStorage from '@react-native-community/async-storage';

const TabNav = createBottomTabNavigator({
  Index: {
    screen: Index,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`ios-home`} size={24} color={tintColor}/>
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
      tabBarOnPress: async ({ navigation, defaultHandler}) => {
        const userInfo = await AsyncStorage.getItem('userInfo');
        if (userInfo) {
          defaultHandler();//调用组建内默认的实现方法
        } else {
          navigation.navigate('Login', {'mode': 'modal'});
        }
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: theme.themeColor,
    inactiveTintColor: 'gray'
  }
});

const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const tranParams = transitionProps ? transitionProps.scene.route.params : undefined
  const prevParams = prevTransitionProps ? prevTransitionProps.scene.route.params : undefined
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

export const AppNav = createStackNavigator(
  {
    Tab: {
      screen: TabNav,
      navigationOptions: {
        header: null,
        headerBackTitle: null,
      }
    },
    VideoWebsite,
    VideoPlay,
    Login,
    Recharge,
  }, {
    transitionConfig: dynamicModalTransition,
    cardOverlayEnabled: true,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
    }
  },
)

const AppContainer = createAppContainer(AppNav);

export default AppContainer;
