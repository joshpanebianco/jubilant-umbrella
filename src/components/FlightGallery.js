import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FlightGallery extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="gallery-table">
        <h2>All Flights</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Flight</th>
              <th>From > To</th>
              <th>Plane</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            {this.props.flights.map ((flight) => {
              const airplaneId = flight.airplane_id;
              let airplaneName = '';
              this.props.airplanes.forEach((airplane) => {
                if (airplaneId === airplane.id) {
                  airplaneName = airplane.name;
                }
                console.log(airplane);
              });
              return (<tr key={flight.flight_number}>
                <td>{flight.date}</td>
                <td><Link to={`/reservation/${flight.id}`}>{flight.flight_number}</Link></td>
                <td>{flight.origin} > {flight.destination}</td>
                <td>{airplaneName}</td>
                <td>0</td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FlightGallery;
