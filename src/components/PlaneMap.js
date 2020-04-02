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

    console.log(this.state.rowArray);

    this.changeArray = this.changeArray.bind(this);
    this.saveSeat = this.saveSeat.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  changeArray = () => {
    // console.log(this.props);
    this.setState({rowArray: this.props.rowArray})
  }

  saveSeat(reservedRow, reservedCol) {
    this.setState({reservedRow: reservedRow, reservedCol: reservedCol});
    console.log("choice saved");
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log("choice submitted");
    this.props.onSubmit(this.state.reservedRow, this.state.reservedCol);
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          {this.props.rowArray.map((row) => <Row key={row} rowNumber={row} colArray={this.props.colArray} onSubmit={this.saveSeat}/>)}

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default PlaneMap;
