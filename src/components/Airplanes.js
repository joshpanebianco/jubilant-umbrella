import React, { Component } from 'react';
import AirplanesGallery from './AirplanesGallery'
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/airplanes.json'
// const SERVER_URL = 'http://airline.herokuapp.com/airplanes.json'
// const SERVER_URL = 'ngrok.io'

class Airplanes extends Component {
  constructor() {
    super();
    // state to hold name, rows and cols
    this.state = {
      name: '',
      rows: '',
      cols: '',
      planes: [],
    };

    // bind this to each event handler function
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeRows = this._handleChangeRows.bind(this);
    this._handleChangeCols = this._handleChangeCols.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.savePlane = this.savePlane.bind(this);

    // poll for planes from the DB via ajax
    const fetchPlanes = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({planes: results.data});
        setTimeout(fetchPlanes, 4000);
      });
    };

    fetchPlanes();
  }

  savePlane(newPlane) {
    axios.post(SERVER_URL, {
      name: newPlane.name,
      rows: newPlane.rows,
      cols: newPlane.cols,
    }).then((results) => {
      const allPlanes = this.state.planes;
      allPlanes.push(results.data);
      this.setState({planes: allPlanes});
    });
  }

  // handlers to setState of each state variable
  _handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  _handleChangeRows(event) {
    this.setState({rows: event.target.value});
  }

  _handleChangeCols(event) {
    this.setState({cols: event.target.value});
  }

  // handler to submit to parent function onSubmit
  _handleSubmit(event) {
    event.preventDefault();
    // create newPlane with state variables
    const newPlane = {
      name: this.state.name,
      rows: this.state.rows,
      cols: this.state.cols,
    };

    // post the newPlane to all existing planes DB and update this.state.planes
    this.savePlane(newPlane);

    // reset state variables, update allPlanes
    this.setState({
      name: '',
      rows: '',
      cols: '',
    });
    console.log("Submitted");
  }

  render() {
    return (
      <div className="CreatePlane">
        <h2>Create A New Plane</h2>
        <form onSubmit={ this._handleSubmit }>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} required onChange={ this._handleChangeName }/>
          </label>
          <label>
            Number of Rows:
            <input type="number" name="rows" value={this.state.rows} required onChange={ this._handleChangeRows } />
          </label>
          <label>
            Number of Columns:
            <input type="number" name="columns" value={this.state.cols} required onChange={ this._handleChangeCols }/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <AirplanesGallery planes={this.state.planes}/>
      </div>
    );
  };
}

export default Airplanes;
