import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlaneMap from './PlaneMap';
import PlaneDropdown from './PlaneDropdown';

const BASE_URL = 'http://localhost:3000/'
const FLIGHTS_SERVER_URL = BASE_URL + 'flights.json';
const AIRPLANES_SERVER_URL = BASE_URL + 'airplanes.json';
const USERS_SERVER_URL = BASE_URL + 'users.json';
const RESERVATIONS_SERVER_URL = BASE_URL + 'reservations.json';

class SeatingMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flightId: props.match.params.flightId,
			flightsJson: [],
			usersJson: [],
			reservationsJson: [],
			totalSeats: '',
			reservedSeats: [],
			airplanes: [],
			name: '',
			rows: '',
			cols: '',
			rowArray: [],
			colArray: [],
			reservedRow: '',
			reservedCol: '',
		};

		this.rowArray = React.createRef();

		this._handleAirplaneChoice = this._handleAirplaneChoice.bind(this);
		this.saveSeat = this.saveSeat.bind(this);

		const fetchAirplanes = () => {
			axios.get(AIRPLANES_SERVER_URL).then((results) => {
				this.setState({airplanes: results.data});
				console.log(this.state.airplanes);
			});
		};
		fetchAirplanes();

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

	}

	_handleAirplaneChoice(name, rows, cols) {
		const rowArray = [];
		for (let i=1; i<=rows; i++){
			rowArray.push(i);
		}
		const colArray = [];
		for (let i=1; i<=cols; i++){
			colArray.push(i);
		}
		console.log(rowArray);
		this.setState({name: name, rows: rows, cols: cols, rowArray: rowArray, colArray: colArray}, () => {
		console.log(`name: ${this.state.name}, rowArray: ${this.state.rowArray}`);
	});
		this.rowArray.current.changeArray();
	}

	saveSeat(reservedRow, reservedCol) {
		this.setState({reservedRow: reservedRow, reservedCol: reservedCol}, () => {
			console.log(`choice (${this.state.reservedRow}-${this.state.reservedCol}) finalised`);
		});
	}

	render() {
		return (
			<div>
				<h1>{this.props.match.params.flightId}</h1>
				<h2>Choose Plane</h2>
				<PlaneDropdown airplanes={this.state.airplanes} onSubmit={this._handleAirplaneChoice}/>
		    <h2>{this.state.name} Seating Map</h2>
				<div className="seating-chart">
				  <PlaneMap ref={this.rowArray} plane={this.state} rowArray={this.state.rowArray} colArray={this.state.colArray} onSubmit={this.saveSeat}/>
				</div>
			</div>
		)
	}
}

export default SeatingMap;
