import React, { Component } from 'react';
import AirplanesGallery from './AirplanesGallery'

class Airplanes extends Component {
  constructor() {
    super();
    // state to hold name, rows and cols
    this.state = {
      name: '',
      rows: '',
      cols: '',
      flights: [],
    };

    // bind this to each event handler function
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeRows = this._handleChangeRows.bind(this);
    this._handleChangeCols = this._handleChangeCols.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
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
    // create newFlight with state variables
    const newFlight = {
      name: this.state.name,
      rows: this.state.rows,
      cols: this.state.cols,
    };

    // add the newFlight to all existing flights array
    const allFlights = this.state.flights;
    allFlights.push(newFlight);

    // 
    this.setState({
      name: '',
      rows: '',
      cols: '',
      flights: allFlights,
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
        <AirplanesGallery />
      </div>
    );
  };
}

export default Airplanes;
