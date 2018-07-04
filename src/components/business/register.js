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
import {registerBusiness} from '../../actions/registerBusinessActions';
import AuthNavigationBar from '../navBar/authNavigationBar';
import {receivedDataStringify} from '../helper/utilities';
import Categories from './categories';
import Locations from './locations';

class BusinessRegister extends Component {

  componentDidMount=()=>{

    //check validity of token before mounting the component
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
    if(receivedProp.registerBizMessage.message){
      if(receivedProp.registerBizMessage.message === "Business registered!"){
        NotificationManager.success("Business registered!","", 5000);
        this.props.history.push("/businesses")
      }else{
        NotificationManager.error(receivedProp.registerBizMessage.message,"", 5000);
      }
    }
    
  }

  //Function to get values from the register form in order to add the business to the DB
  registerBiz=(event)=>{
    event.preventDefault();
    let businessData={
      business_name:event.target.elements.businessName.value,
      business_profile:event.target.elements.descr.value,
      location:event.target.elements.location.value,
      category:event.target.elements.category.value
    };
    this.props.registerBusiness(receivedDataStringify(businessData))
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
                  <Locations/>
                  <br />
                  <Categories/>
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
