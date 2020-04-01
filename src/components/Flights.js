import React, { Component } from 'react';
import axios from 'axios';
import FlightGallery from './FlightGallery';

const SERVER_URL = 'http://localhost:3000/flights.json'

class Flights extends Component {
  constructor(props) {
    super();
    this.state = {
      flight_number: '',
      date: '',
      destination: '',
      origin: '',
      airplane: '',
      flights: [],
    };

    // bind this to each event handler function
    this._handleChangeFlightNumber = this._handleChangeFlightNumber.bind(this);
    this._handleChangeDate = this._handleChangeDate.bind(this);
    this._handleChangeOrigin = this._handleChangeOrigin.bind(this);
    this._handleChangeDestination = this._handleChangeDestination.bind(this);
    this._handleChangeAirplane = this._handleChangeAirplane.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    // poll for flights from the DB via ajax
    const fetchFlights = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({flights: results.data});
        setTimeout(fetchFlights, 4000);
      });
    };

    fetchFlights();
  }

  saveFlight(newFlight) {
    axios.post(SERVER_URL, {
      flight_number: this.state.flight_number,
      date: this.state.date,
      destination: this.state.destination,
      origin: this.state.origin,
    }).then((results) => {
      const allFlights = this.state.flights;
      allFlights.push(results.data);
      this.setState({flights: allFlights});
    });
  }

  // handlers to setState of each state variable
  _handleChangeFlightNumber(event) {
    this.setState({flight_number: event.target.value});
  }

  _handleChangeDate(event) {
    this.setState({date: event.target.value});
  }

  _handleChangeDestination(event) {
    this.setState({destination: event.target.value});
  }

  _handleChangeOrigin(event) {
    this.setState({origin: event.target.value});
  }

  _handleChangeAirplane(event) {
    this.setState({airplane: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    const newFlight = {
      flight_number: this.state.flight_number,
      date: this.state.date,
      destination: this.state.destination,
      origin: this.state.origin,
      airplane: this.state.airplane,
    };

    // post the newFlight to all existing flight DB and update this.state.flights
    this.saveFlight(newFlight);

    // reset state variables
    this.setState({
      flight_number: '',
      date: '',
      destination: '',
      origin: '',
      airplane: '',
    });
  }

  render(props) {
    return (
      <div>
        <h1>Create A New Flight</h1>
        <form onSubmit={ this._handleSubmit }>
          <label>
            Flight Number
            <input type='text' name='flight_number' value={this.state.flight_number} required onChange={ this._handleChangeFlightNumber } />
          </label>
          <label>
            Date
            <input type='date' name='date' value={this.state.date} required onChange={ this._handleChangeDate } />
          </label>
          <label>
            To
            <input type='text' name='destination' value={this.state.destination} required onChange={ this._handleChangeDestination } />
          </label>
          <label>
            From
            <input type='text' name='origin' value={this.state.origin} required onChange={ this._handleChangeOrigin } />
          </label>
          <label>
            Plane
            <input type='text' name='airplane' value={this.state.airplane} required onChange={ this._handleChangeAirplane } />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <FlightGallery flights={this.state.flights}/>
      </div>
    );
  };
}

export default Flights;
