import React, { Component } from 'react';

class PlaneDropdown extends Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    const airplane = this.props.airplanes[event.target.value-1]
    console.log(airplane);
    this.props.onSubmit(airplane.name, airplane.rows, airplane.cols);
  }

  render() {
    return (
      <select onChange={this._handleChange}>
        <option key={0} value=''></option>
        {this.props.airplanes.map((airplane) => <option
          key={airplane.name}
          value={airplane.id}
        >{airplane.name}</option>)}
      </select>
    );
  }
}

export default PlaneDropdown;
