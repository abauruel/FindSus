import { createAppContainer, createStackNavigator } from 'react-navigation';

import Screen from './pages/Screen';
import Login from './pages/Login';
import Home from './pages/Home';

import './styles/global';

const Routes = createAppContainer(
  createStackNavigator({
    Screen,
    Login,
    Home,
  }),
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default Routes;
