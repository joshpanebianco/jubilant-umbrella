import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Global function will be used
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);  // Uppercase the first letter of a string

// Change after deployment
const SERVER_URL = 'http://localhost:3000/flights.json';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      flightInfo: [],
    }
    this.searchFlight = this.searchFlight.bind(this);
  }

  searchFlight(origin, destination) {
    axios.get(SERVER_URL).then((results) => {
      // Check matched flights
      results.data.forEach((f) => {
        if (f.origin === capitalize(origin) && f.destination === capitalize(destination)) {
          f.airplaneName = this.props.projectInfo.airplanesJson[f.airplane_id-1].name
          this.setState(this.setState({flightInfo: []}), () => {this.setState({flightInfo: this.state.flightInfo.concat(f)})});  // Use concat because concat() does not mutate original array,
          this.setState({plane: f.airplane})
        }
      });

      // Below is for test
      // this.setState({flightInfo: results.data});
    });
  }

  render() {
    return (
      <div>
        <h1>Find Your Plane</h1>
        <SearchForm
          onSubmit={this.searchFlight}
          flightInfo={this.state.flightInfo}
        />
      </div>
    );
  };
}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.origin, this.state.destination);
  }

  _handleChange(event) {
    const target = event.target;
    const name = target.name

    this.setState({
      [name]: target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>
            From:
            <input type="text" placeholder="From" name="origin" onChange={this._handleChange} />
          </label>
          <label>
            To:
            <input type="text" placeholder="To" name="destination" onChange={this._handleChange} />
          </label>
          <input type="submit" value="Search" className="submit-btn"/>
        </form>
        <FlightDetails
          flightInfo={this.props.flightInfo}
          origin={this.state.origin}
          destination={this.state.destination}
        />
      </div>
    );
  }
}

const FlightDetails = (props) => {
  return (
    <div className="gallery-table">
      <h2>Flight from {capitalize(props.origin)} to {capitalize(props.destination)}</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Flight</th>
            <th>From>To</th>
            <th>Plane</th>
          </tr>
        </thead>
        <tbody>
          {props.flightInfo.map((f) =>
            <tr key={f.id}>
              <td>{f.date}</td>
              <td><Link to={`/reservation/${f.id}`}>{f.flight_number}</Link></td>
              <td>{f.origin}>{f.destination}</td>
              <td>{f.airplaneName}</td>
            </tr>
            )}
          </tbody>
      </table>
    </div>
  );
}

export default Search;
