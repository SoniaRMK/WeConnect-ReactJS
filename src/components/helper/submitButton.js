import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class SubmitButton extends Component {

  render() {
    return (
      <div className="submitButton">
         <button type="submit" className="btn btn-info" style={{float:'left'}}>Submit</button>
      </div>
    );
  }
}

export default SubmitButton;