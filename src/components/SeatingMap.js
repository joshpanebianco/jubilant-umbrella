import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlaneMap from './PlaneMap';
import PlaneDropdown from './PlaneDropdown';

const SERVER_URL = 'http://localhost:3000/airplanes.json'

class SeatingMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
			axios.get(SERVER_URL).then((results) => {
				this.setState({airplanes: results.data});
				console.log(this.state.airplanes);
			});
		};
		fetchAirplanes();
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

// Notes from call with Alex
// for loop one that is asking the number of rows
// for loop one that is asking the number of columns
// rows = 4
// columns = 4
// for (let i = 0; i < rows; i++) {
// 	<div>
// 	for (let j = 0; j < columns; j++) {
// 			<button />
// 	}
// 	</div>
// }
//
// <div>
// 	<button />
// 	<button />
// 	<button />
// 	<button />
// </div>
// <div>
// 	<button />
// 	<button />
// 	<button />
// 	<button />
// </div>
// <div>
// 	<button />
// 	<button />
// 	<button />
// 	<button />
// </div>
