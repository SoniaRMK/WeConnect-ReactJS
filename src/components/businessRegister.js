import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class BusinessRegister extends Component {

  render() {
    return (
      <div className="businessRegister">
       <div className="container">
        <div className="row">
            <div className="col bg-success">
              <h4><br />Register a business</h4><br/>
              <form action="#">
                <div className="form-group">
                  <input type="text" className="form-control" id="businessName" placeholder="Enter Business Name" name="businessName" required="required" />
                </div>
                <div className="form-group">
                  <select className="form-control" id="location" name="location" required="required">
                    <option>Business Location</option>
                    <option>Mbarara</option>
                    <option>Kampala</option>
                    <option>Gulu</option>
                    <option>Soroti</option>
                    <option>Hoima</option>
                    <option>Kabarole</option>
                  </select>
                  <br />
                  <select className="form-control" id="category" name="category" required="required">
                    <option>Business Category</option>  
                    <option>Consulting</option>
                    <option>Telecommunications</option>
                    <option>Food and Beverages</option>
                    <option>Computing and Technology</option>
                    <option>Hotels and Accommodation</option>
                    <option>Arts and Crafts</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Enter Description of the business" id="descr" name="descr" required="required" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Register</button>
              </form><br /><br />
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default BusinessRegister;
