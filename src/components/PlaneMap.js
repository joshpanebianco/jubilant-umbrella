import React, { Component } from 'react';
import Row from './Row'
import './App.css';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'
const FLIGHTS_SERVER_URL = BASE_URL + 'flights.json';
const AIRPLANES_SERVER_URL = BASE_URL + 'airplanes.json';
const USERS_SERVER_URL = BASE_URL + 'users.json';
const RESERVATIONS_SERVER_URL = BASE_URL + 'reservations.json';

class PlaneMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowArray: [],
      colArray: [],
      reservedRow: '',
      reservedCol: '',
      flightId: props.plane.flightId,
      reservedSeats: props.plane.reservedSeats, // doesn't work don't know why
    };

    console.log(this.state.rowArray);

    this.saveSeat = this.saveSeat.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  saveSeat(reservedRow, reservedCol) {
    this.setState({reservedRow: reservedRow, reservedCol: reservedCol});
    console.log("choice saved, ", reservedRow, reservedCol);
  }

  _handleSubmit(event) {
    event.preventDefault();

    axios.post(RESERVATIONS_SERVER_URL, {
      flight_id: this.state.flightId,
      row: this.state.reservedRow.toString(),
      col: this.state.reservedCol,
      // User coming soon
    }).then((results) => {
      console.log('success');
    });

    console.log("choice submitted");
    this.props.onSubmit(this.state.reservedRow, this.state.reservedCol);
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          {this.props.rowArray.map((row) => <Row key={row} rowNumber={row} colArray={this.props.colArray} onSubmit={this.saveSeat}/>)}

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default PlaneMap;
