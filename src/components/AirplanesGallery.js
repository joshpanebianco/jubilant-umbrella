import React, { Component } from 'react';

class AirplanesGallery extends Component {
  render() {
    return (
      <div>
        <h2>All Airplanes</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Rows</th>
            <th>Columns</th>
          </tr>
          {this.props.planes.map( (plane) =>
              <tr key={plane.id}>
                <td>{plane.name}</td>
                <td>{plane.rows}</td>
                <td>{plane.cols}</td>
              </tr>
          )}
        </table>
      </div>
    );
  };
}

export default AirplanesGallery;
