import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Airplanes from './Airplanes';
import Flights from './Flights';
import Search from './Search';
import SeatingMap from './SeatingMap';


const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/login' component={LogIn}></Route>
      <Route exact path='/airplanes' component={Airplanes}></Route>
      <Route exact path='/flights' component={Flights}></Route>
      <Route exact path='/search' component={Search}></Route>
      <Route exact path='/seatingmap' component={SeatingMap}></Route>
    </Switch>
  );
}

export default Main;
