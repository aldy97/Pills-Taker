import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/pages/home';
import Recent from './components/pages/Edit';

interface RoutesProps {
  user: any
}

const Routes = (props: RoutesProps) => (
  <Router>
    <Scene key='root'>
      <Scene key='home' component={Home} title='Home' initial={true} />
      <Scene key='edit' component={Recent} title='Edit' />
    </Scene>
  </Router>
);
export default Routes;
