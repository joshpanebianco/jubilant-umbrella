import React, { Component } from 'react';
import axios from 'axios';

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

  searchFlight() {
    axios.get(SERVER_URL).then((results) => {
      this.setState({flightInfo: results.data});
    });
  }

  render() {
    return (
      <div>
        <h1>Find Your Plane</h1>
        <SearchForm onSubmit={this.searchFlight} />
        <FlightDetails flightInfo={this.state.flightInfo} />
      </div>
    );
  };
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: ''
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
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
      <form onSubmit={this._handleSubmit}>
        <label>
          From:
          <input type="text" placeholder="From" name="origin" onChange={this._handleChange} />
        </label>
        <label>
          To:
          <input type="text" placeholder="To" name="destination" onChange={this._handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

const FlightDetails = (props) => {
  return (
    <div>
      {props.flightInfo.map((f) => <p key={f.id}>from: {f.origin}; to: {f.destination}</p>)}
    </div>
  );
}

export default Search;
