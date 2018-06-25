import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import decode from 'jwt-decode';
import {NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {registerBusiness} from '../actions/registerBusinessActions';
import AuthNavigationBar from './authNavigationBar';

class BusinessRegister extends Component {

  componentDidMount=()=>{

    var userToken = sessionStorage.getItem("access_token");
    const userDecoded = decode(userToken);
    if ((userToken !== null) && (userDecoded.exp > Date.now() / 1000)) {
      this.props.history.push("/register-business")
    }
    else{
      this.props.history.push("/")
    }
  }
  
  componentWillReceiveProps(receivedProp){
    console.log(receivedProp)
    if(receivedProp.registerBizMessage.message){
      if(receivedProp.registerBizMessage.message === "Business registered!"){
        NotificationManager.success("Business registered!","", 5000);
        this.props.history.push("/businesses")
      }else{
        NotificationManager.error(receivedProp.registerBizMessage.message,"", 5000);
        console.log(receivedProp.registerBizMessage.message)
      }
    }
    
  }

  registerBizDataStringify = (object) =>{
    let simpleObj={};
        for (let prop in object){
            if (!object.hasOwnProperty(prop)){
                continue;
            }
            if (typeof(object[prop]) === 'object'){
                continue;
            }
            simpleObj[prop] = object[prop];
        }
        return JSON.stringify(simpleObj);

  }

  registerBiz=(event)=>{
    event.preventDefault();
    let businessData={
      business_name:event.target.elements.businessName.value,
      business_profile:event.target.elements.descr.value,
      location:event.target.elements.location.value,
      category:event.target.elements.category.value
    };
    this.props.registerBusiness(this.registerBizDataStringify(businessData))
  }

  render() {
    return (
      <div className="businessRegister">
        <AuthNavigationBar/>
        <br/><br/><br/>
       <div className="container">
        <div className="row">
            <div className="col bg-info">
              <h4 style={{textAlign: 'center', color: '#fff', fontWeight: 'bolder'}}><br />Register a business</h4><br/>
              <form onSubmit={this.registerBiz}>
                <div className="form-group">
                  <input type="text" className="form-control" id="businessName" placeholder="Enter Business Name" name="businessName" required="required" />
                </div>
                <div className="form-group">
                  <select className="form-control" id="location" name="location" required="required">
                    <option value="">Business Location</option> 
                    <option value="Mbarara">Mbarara</option>
                    <option value="Kampala">Kampala</option>
                    <option value="Gulu">Gulu</option>
                    <option value="Soroti">Soroti</option>
                    <option value="Hoima">Hoima</option>
                    <option value="Kabarole">Kabarole</option>
                  </select>
                  <br />
                  <select className="form-control" id="category" name="category" required="required">
                    <option value="">Business Category</option>  
                    <option value="Consulting">Consulting</option>
                    <option value="Telecommunications">Telecommunications</option>
                    <option value="Food and Beverages">Food and Beverages</option>
                    <option value="Computing and Technology">Computing and Technology</option>
                    <option value="Hotels and Accommodation">Hotels and Accommodation</option>
                    <option value="Arts and Crafts">Arts and Crafts</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Enter Description of the business" id="descr" name="descr" required="required" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" style={{width: '25%', marginLeft: '25%', backgroundColor: '#fff', borderColor: '#14a2b8', color: '#14a2b8'}}>Register</button>
                <a className="btn btn-warning" style={{width: '25%', borderColor: '#14a2b8', color: '#fff'}} href="/businesses" role="button">Cancel</a>
              </form><br /><br />
            </div>
        </div>
        </div><br/><br/><br/>
      </div>
    );
  }
}

BusinessRegister.propTypes = {
  registerBizMessage: PropTypes.object,
  registerBusiness: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  registerBizMessage: state.registerBusiness.registerBusinessMessage
});

export default withRouter(connect(mapStateToProps, {registerBusiness})(BusinessRegister));
