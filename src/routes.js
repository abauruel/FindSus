import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// import Screen from './pages/Screen';
import Map from './components/Map';
import Home from './pages/Home';

import './styles/global';

const Routes = createAppContainer(
  createSwitchNavigator({
    // Screen,
    // Login,
    // Home,
    Map,
  }),
);

export default Routes;
