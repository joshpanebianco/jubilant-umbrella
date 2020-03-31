import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import CreatePlane from './CreatePlane';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/create-plane' component={CreatePlane}></Route>
    </Switch>
  );
}

export default Main;
