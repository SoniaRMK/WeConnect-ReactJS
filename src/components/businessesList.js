import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import decode from 'jwt-decode';
import {NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { getBusinesses } from '../actions/getAllBusinessesActions';
import AuthNavigationBar from './authNavigationBar';

class BusinessesList extends Component {

  componentDidMount=()=>{

    var userToken = sessionStorage.getItem("access_token");
    const userDecoded = decode(userToken);
    if ((userToken !== null) && (userDecoded.exp > Date.now() / 1000)) {
      this.props.getBusinesses();
      // NotificationManager.success("welcome to Weconnect ","", 5000);
    }
    else{
      this.props.history.push("/")
    }
  }

filterBusinesses=(event)=>{
  event.preventDefault();
  let location = event.target.elements.location.value
  let category = event.target.elements.category.value
  let q = event.target.elements.search_term.value
  let limit = 6
  this.props.getBusinesses(q, location, category, limit)
}

  render() {
    if(this.props.getBusinessesMessage.message){
      NotificationManager.warning(this.props.getBusinessesMessage.message,"", 5000);
    }
    const businesses=Object.values({...this.props.getBusinessesMessage.Businesses});
    if (businesses){
      Array.prototype.reverse.call(businesses)
    }else{
      NotificationManager.error("No businesses found","", 5000);
    }

    return (
      <div className="businessesList">
        <AuthNavigationBar/>
        <br/><br/>
        <div className="container">
          <h2>Businesses</h2>
          <hr/>
          <br/>
          <div className="row">
              <div className="col-2">
                <a href ="/register-business">
                  <button type="button" className="btn btn-info btn-sm">Register Business</button>
                </a>
              </div>
                <form className="form-inline" onSubmit={this.filterBusinesses}>
                  <select className="form-control mb-2 mr-sm-2" name="category">
                    <option value="">Business Category</option>  
                    <option value="Consulting">Consulting</option>
                    <option value="Telecommunications">Telecommunications</option>
                    <option value="Food and Beverages">Food and Beverages</option>
                    <option value="Computing and Technology">Computing and Technology</option>
                    <option value="Hotels and Accommodation">Hotels and Accommodation</option>
                    <option value="Arts and Crafts">Arts and Crafts</option>
                  </select>
                  <select className="form-control mb-2 mr-sm-2" name="location">
                    <option value="">Business Location</option> 
                    <option value="Mbarara">Mbarara</option>
                    <option value="Kampala">Kampala</option>
                    <option value="Gulu">Gulu</option>
                    <option value="Soroti">Soroti</option>
                    <option value="Hoima">Hoima</option>
                    <option value="Kabarole">Kabarole</option>
                  </select>
                  
                  <input type="text" className="form-control mb-2 mr-sm-2" name="search_term" placeholder="Enter search term"/>    
                  <button type="submit" className="btn btn-info mb-2">Search</button>
                </form>
              <div style = {{width:'100%'}}>
              <br/><br/>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Business Name</th>
                      <th>Category</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businesses.map((business, index) =>(
                    <tr key={business['id']}>
                    <td><NavLink to={`/businesses/${business.id}`} style={{textDecoration: 'None'}}> {business['BusinessName']}</NavLink></td>
                    <td> {business['Category']}</td>
                    <td> {business['Location']}</td>
                    </tr>)
                    )}
                  </tbody>
                </table><br/><br/><br/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

BusinessesList.propTypes = {
  getBusinessesMessage: PropTypes.object.isRequired,
  businesses: PropTypes.object
}

const mapStateToProps = state =>({
  getBusinessesMessage:state.getBusinesses.getBusinessesMessage,
  getBusinesses:PropTypes.func.isRequired,
  businesses:state.getBusinesses.getBusinessesMessage
});

export default withRouter(connect(mapStateToProps,{getBusinesses})(BusinessesList));