import React, { Component } from 'react';

class FlightsDropdown extends Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    const airplane = this.props.airplanes[event.target.value-1]
    console.log(airplane);
    this.props.onChange(airplane.id);
  }

  render() {
    return (
      <select onChange={this._handleChange}>
        {this.props.airplanes.map((airplane) => <option
          key={airplane.name}
          value={airplane.id}
        >{airplane.name}</option>)}
      </select>
    );
  }
}

export default FlightsDropdown;
