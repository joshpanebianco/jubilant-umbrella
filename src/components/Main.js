import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';
import Admin from './Admin';

import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Airplanes from './Airplanes';
import Flights from './Flights';
import Search from './Search';


const Main = () => {
  return (
    <AuthContext.Provider value={false}>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        <Route exact path='/login' component={LogIn}></Route>
        <Route exact path='/airplanes' component={Airplanes}></Route>
        <Route exact path='/flights' render={routeProps => <Flights something="foo" />}></Route>
        <Route exact path='/search' component={Search}></Route>

        <PrivateRoute path='/admin' component={Admin}></PrivateRoute>
      </Switch>
    </AuthContext.Provider>
  );
}

export default Main;
