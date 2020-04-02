import React, { Component } from 'react';

class AirplanesGallery extends Component {
  render() {
    return (
      <div className="results-card">
        <h2>All Airplanes</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rows</th>
              <th>Columns</th>
            </tr>
          </thead>
          <tbody>
            {this.props.planes.map( (plane) =>
                <tr key={plane.id}>
                  <td>{plane.name}</td>
                  <td>{plane.rows}</td>
                  <td>{plane.cols}</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
}

export default AirplanesGallery;
