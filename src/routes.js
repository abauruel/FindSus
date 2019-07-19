import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Screen from './pages/Screen';
import Login from './pages/Login';
import Home from './pages/Home';

import './styles/global';

const Routes = createAppContainer(
  createSwitchNavigator({
    Screen,
    Login,
    Home,
  }),
);

export default Routes;
