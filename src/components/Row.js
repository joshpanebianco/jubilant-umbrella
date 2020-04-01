import React from 'react';
import './App.css';

function Row() {
	return (
		// Loop that defines number of seats/columns
		<div className="row">
	    <button className="single-seat">1a</button>
			<button className="single-seat">1b</button>
			<button className="single-seat">1c</button>
			<button className="single-seat">1d</button>
		</div>
	)
}

export default Row;
