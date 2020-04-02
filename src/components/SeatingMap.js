import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlaneMap from './PlaneMap';
import PlaneDropdown from './PlaneDropdown';
import PlaneInfo from './PlaneInfo';

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
			});
		};
		fetchAirplanes();

		const fetchUsers = () => {
				axios.get(USERS_SERVER_URL).then((results) => {
					this.setState({usersJson: results.data});
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
				});
			};
			fetchReservations();

			const fetchFlights = () => {
				axios.get(FLIGHTS_SERVER_URL).then((results) => {
					this.setState({flightsJson: results.data});
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
		console.log(name);
		this.setState({name: name, rows: rows, cols: cols, rowArray: rowArray, colArray: colArray});
	}

	saveSeat(reservedRow, reservedCol) {
		this.setState({reservedRow: reservedRow, reservedCol: reservedCol}, () => {
			console.log(`choice (${this.state.reservedRow}-${this.state.reservedCol}) finalised`);
		});
	}

	render() {
		return (
			<div>
				<h2>Reservation</h2>
				<PlaneInfo onLoad={this._handleAirplaneChoice} flightId={this.state.flightId} airplanes={this.state.airplanes} flights={this.state.flightsJson}/>
		    <h2>{this.state.name} Seating Map</h2>
				<div className="seating-chart">
				  <PlaneMap plane={this.state} rowArray={this.state.rowArray} colArray={this.state.colArray} onSubmit={this.saveSeat}/>
				</div>
			</div>
		)
	}

	// componentDidMount() {
	// 	this._handleAirplaneChoice(this.props.match.params.flightId);
	// }
}

export default SeatingMap;
