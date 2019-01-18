import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import AppNavigation from '../../navigation';

export default createNavigationReducer(AppNavigation);

