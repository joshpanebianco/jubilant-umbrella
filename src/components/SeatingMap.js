import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Row from './Row';

function SeatingMap() {
	return (
		<div>
	    <h2>Seating map</h2>
			<div className="seating-chart">
			  <Row />
			</div>
		</div>
	)
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
