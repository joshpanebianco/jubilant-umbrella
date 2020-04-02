import React, { Component } from 'react';
import './App.css';

class Row extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reservedRow: this.props.rowNumber,
			reservedCol: '',
		};
		this._handleClick = this._handleClick.bind(this);
	}

	_handleClick(event) {
		event.preventDefault();
		const reservedRow = this.state.reservedRow;
		const reservedCol = event.target.value;
		this.props.onSubmit(reservedRow, reservedCol)
	}

	render() {
		return (
			<div className="row">
				{this.props.colArray.map((column) => <button
					key={this.state.reservedRow + column}
					className="single-seat"
					value={column}
					onClick={this._handleClick}
					>{this.state.reservedRow}-{column}</button>)}
			</div>
		);
	}
}

export default Row;
