import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import AuthNavigationBar from './authNavigationBar';

class BusinessOne extends Component {

  render() {
    return (
      <div className="App">
        <AuthNavigationBar/>
         <div className="container">
          <br /><br /><h1>BusinessName</h1><br />
          <img src="Logos/logo.gif" className="img-thumbnail" alt="logo" width={304} height={236} style={{border: '7px solid #007bff'}} /><hr /> <br />
          <div className="row">
            <div className="col bg-success">
              <h3><br />About BusinessName</h3>
              <p>
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar
                elit a elit aliquam, non iaculis ex eleifend. Sed enim orci, iaculis eu
                ipsum at, accumsan scelerisque lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
                in quam viverra mi sagittis pretium quis a tortor. Ut congue gravida suscipit.
                <br />
                <br />Nunc blandit nibh non enim auctor, in pharetra tortor elementum. Mauris
                nec quam ut enim posuere posuere in eu lacus. Sed pharetra varius magna
                sed elementum. Curabitur convallis dui tellus, et lobortis urna porttitor
                vitae. Cras at enim justo. Etiam euismod elit sapien, eget congue dolor
                convallis sollicitudin.
              </p>
            </div>
            <div className="col bg-warning">
              <h3><br />Add a Review</h3>
              <form action="#">
                <div className="form-group">
                  <input type="text" className="form-control" id="reviewTitle" placeholder="Enter the review title" required="required"/>
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows={5} id="reviweMsg" placeholder="Enter the review message" required="required"/>
                </div><br /><br />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="container">
            <div className="col bg-white">
              <h3><br /><br />Reviews</h3><br /><br />
              <button type="submit" className="btn btn-primary">Get all reviews</button>
              <br /><br />
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default BusinessOne;
