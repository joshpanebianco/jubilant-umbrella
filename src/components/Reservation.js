import React, { Component } from 'react';
import axios from 'axios';


const BASE_URL = 'http://localhost:3000/'
const FLIGHTS_SERVER_URL = BASE_URL + 'flights.json';
const AIRPLANES_SERVER_URL = BASE_URL + 'airplanes.json';
const USERS_SERVER_URL = BASE_URL + 'users.json';
const RESERVATIONS_SERVER_URL = BASE_URL + 'reservations.json';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flightId: props.match.params.flightId,
            flightsJson: [],
            airplanesJson: [],
            usersJson: [],
            reservationsJson: [],
            totalSeats: '',
            reservedSeats: [], 
        };
    
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

              // Get all reserved seats of this flight
              const reservedSeats = [];
              results.data.forEach((r) => {
                if (r.flight_id === parseInt(this.state.flightId)) {
                    reservedSeats.push({row: r.row, col: r.col});
                }
              });
              this.setState({reservedSeats: reservedSeats})

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
            <div>
				{/* <h2>Plane: {this.state.airplanesJson[this.state.flightsJson.airplane_id-1].name}</h2>
				<PlaneDropdown airplanes={this.state.airplanes} onSubmit={this._handleAirplaneChoice}/>
		    <h2>{this.state.name} Seating Map</h2>
				<div className="seating-chart">
				  <PlaneMap ref={this.rowArray} plane={this.state} rowArray={this.state.rowArray} colArray={this.state.colArray} onSubmit={this.saveSeat}/>
				</div> */}
			</div>
        );
    }
}

export default Reservation;