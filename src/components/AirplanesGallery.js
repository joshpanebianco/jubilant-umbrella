import React, { Component } from 'react';

class AirplanesGallery extends Component {
  render() {
    return (
      <div>
        <h2>All Airplanes</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Rows</th>
            <th>Columns</th>
          </tr>
          {this.props.flights.map( (flight) =>
              <tr key={flight.name}>
                <td>{flight.name}</td>
                <td>{flight.rows}</td>
                <td>{flight.cols}</td>
              </tr>
          )}
        </table>
      </div>
    );
  };
}

export default AirplanesGallery;
