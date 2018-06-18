import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class BusinessesList extends Component {

  render() {
    return (
      <div className="businessesList">
        <div className="row">
            <div className="col bg-success">1 of 4</div>
            <div className="col bg-warning">2 of 4</div>
            <div className="col bg-success">3 of 4</div>
            <div className="col bg-warning">4 of 4</div>
        </div>
      </div>
    );
  }
}

export default BusinessesList;