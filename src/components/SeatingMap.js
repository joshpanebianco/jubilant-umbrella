import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PlaneMap from './PlaneMap';

class SeatingMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'QF123',
			rows: 10,
			cols: 4,
			reservedRow: '',
			reservedCol: '',
		};

		this.saveSeat = this.saveSeat.bind(this);
	}

	saveSeat(reservedRow, reservedCol) {
		this.setState({reservedRow: reservedRow, reservedCol: reservedCol}, () => {
			console.log(`choice (${this.state.reservedRow}-${this.state.reservedCol}) finalised`);
		});
	}

	render() {
		return (
			<div>
		    <h2>{this.state.name} Seating Map</h2>
				<div className="seating-chart">
				  <PlaneMap plane={this.state} onSubmit={this.saveSeat}/>
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
