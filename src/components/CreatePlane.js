import React from 'react';
import './App.css';

function CreatePlane() {
	return (
		<div className="CreatePlane">
		 <h2>Create A New Plane</h2>
		 <form>
		  <label>
		    Name:
		    <input type="text" name="name" />
		  </label>
			<label>
		    Number of Rows:
		    <input type="text" name="rows" />
		  </label>
			<label>
		    Number of Columns:
		    <input type="text" name="columns" />
		  </label>
		  <input type="submit" value="Submit" className="submit-btn"/>
		</form>
		</div>
	)
}

export default CreatePlane;
