import React, { Component } from 'react';

class FlightGallery extends Component {
  render() {
    return (
      <div>
        <h2>All Flights</h2>
        <table>
          <tr>
            <th>Date</th>
            <th>Flight</th>
            <th>From > To</th>
            <th>Plane</th>
            <th>Seats</th>
          </tr>
          {this.props.flights.map ((flight) =>
            <tr key={flight.flight_number}>
              <td>{flight.date}</td>
              <td>{flight.flight_number}</td>
              <td>{flight.origin} > {flight.destination}</td>
              <td>{flight.airplane_id}</td>
              <td>0</td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}

export default FlightGallery;
