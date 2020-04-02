import React, { Component } from 'react';

class PlaneInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airplaneId: '',
    }

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    event.preventDefault();
    let airplaneId = '';
    let flightObj = {};

    this.props.flights.map ((flight) => {
      if (this.props.flightId === flight.id.toString()) {
        flightObj = flight;
        airplaneId = flight.airplane_id;
      }
    })

    let airplaneName = '';
    let airplaneRows = 0;
    let airplaneCols = 0;
    this.props.airplanes.forEach((airplane) => {
      if (airplaneId === airplane.id) {
        airplaneName = airplane.name;
        airplaneRows = parseInt(airplane.rows);
        airplaneCols = parseInt(airplane.cols);
      }
    });
    this.props.onLoad(airplaneName, airplaneRows, airplaneCols);
  }

  render() {
    return (
      <div>
        {this.props.flights.map ((flight) => {
          if (this.props.flightId === flight.id.toString()) {
            // this._handleChange();
            return (
              <div key={flight.id}>
                <h4>Date: {flight.date}</h4>
                <h4>Flight: {flight.flight_number}</h4>
                <h4>Trip: {flight.origin} > {flight.destination}</h4>
              </div>
            )
          }
        })}
        <form onSubmit={this._handleChange}>
          <input type="submit" value="Show Seats"/>
        </form>
      </div>
    );
  }

}

export default PlaneInfo;
