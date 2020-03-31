import React, { Component } from 'react';

class Airplanes extends Component {
  constructor() {
    super();
    // state to hold name, rows and cols
    this.state = {
      name: '',
      rows: 0,
      cols: 0,
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
    console.log("Submitted");
    this.setState({
      name: '',
      rows: 0,
      cols: 0,
    });
  }

  render() {
    return (
      <div className="CreatePlane">
        <h2>Create A New Plane</h2>
        <form onSubmit={ this._handleSubmit }>
          <label>
            Name:
            <input type="text" name="name" required onChange={ this._handleChangeName }/>
          </label>
          <label>
            Number of Rows:
            <input type="number" name="rows" required onChange={ this._handleChangeRows } />
          </label>
          <label>
            Number of Columns:
            <input type="number" name="columns" required onChange={ this._handleChangeCols }/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
}

export default Airplanes;
