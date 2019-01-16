import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from './home';
import Index from './pages/Index';
import Search from './pages/Search';
import Ucenter from './pages/Ucenter';

export default createAppContainer(createBottomTabNavigator(
  {
    Home: {screen: Home},
    Index: {screen: Index},
    Search: {screen: Search},
    Ucenter: {screen: Ucenter}
  }
));
