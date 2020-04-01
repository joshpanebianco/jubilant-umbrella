import React, { Component } from 'react';
import Row from './Row'
import './App.css';

class PlaneMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowArray: [1,2,3,4],
      colArray: [1,2,3,4],
      reservedRow: '',
      reservedCol: '',
    };

    this.saveSeat = this.saveSeat.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  saveSeat(reservedRow, reservedCol) {
    this.setState({reservedRow: reservedRow, reservedCol: reservedCol});
    console.log("choice saved");
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.reservedRow);
    console.log(this.state.reservedCol);
    console.log("choice submitted");
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          {this.state.rowArray.map((row) => <Row rowNumber={row} colArray={this.state.colArray} onSubmit={this.saveSeat}/>)}

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default PlaneMap;
