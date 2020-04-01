import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';
import Admin from './Admin';
import axios from 'axios';

import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Airplanes from './Airplanes';
import Flights from './Flights';
import Search from './Search';
import SeatingMap from './SeatingMap';

// Backend url
const BASE_URL = 'http://localhost:3000/'
const FLIGHTS_SERVER_URL = BASE_URL + 'flights.json';
const AIRPLANES_SERVER_URL = BASE_URL + 'airplanes.json';
const USERS_SERVER_URL = BASE_URL + 'users.json';
const RESERVATIONS_SERVER_URL = BASE_URL + 'reservations.json';


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

class Main extends Component {
  constructor() {
    super();
    this.state = {
      flightsJson: [],
      airplanesJson: [],
      usersJson: [],
      reservationsJson: [],
    }

    // How to make it dry???
    const fetchUsers = () => {
      axios.get(USERS_SERVER_URL).then((results) => {
        this.setState({usersJson: results.data});
        setTimeout(fetchUsers, 4000)
      });
    };
    fetchUsers();

    const fetchReservations = () => {
      axios.get(RESERVATIONS_SERVER_URL).then((results) => {
        this.setState({reservationsJson: results.data});
        setTimeout(fetchReservations, 4000)
      });
    };
    fetchReservations();

    const fetchFlights = () => {
      axios.get(FLIGHTS_SERVER_URL).then((results) => {
        this.setState({flightsJson: results.data});
        setTimeout(fetchFlights, 4000)
      });
    };
    fetchFlights();

    const fetchAirplanes = () => {
      axios.get(AIRPLANES_SERVER_URL).then((results) => {
        this.setState({airplanesJson: results.data});
        setTimeout(fetchAirplanes, 4000)
      });
    };
    fetchAirplanes();
  }

  render() {
    return (
      <AuthContext.Provider value={false}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/signup' component={SignUp}></Route>
          <Route exact path='/login' component={LogIn}></Route>
          <Route exact path='/airplanes' component={Airplanes}></Route>
          <Route exact path='/flights' render={routeProps => <Flights something="foo" />}></Route>
          <Route exact path='/search' render={routeProps => <Search projectInfo={this.state} />}></Route>

          <PrivateRoute path='/admin' component={Admin}></PrivateRoute>
        </Switch>
      </AuthContext.Provider>
    );
  }

}

export default Main;
