import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {registerBusiness} from '../actions/registerBusinessActions';
import AuthNavigationBar from './authNavigationBar';

class BusinessRegister extends Component {

  componentWillReceiveProps(receivedProp){
    console.log(receivedProp)
    if(receivedProp.registerBizMessage.message){
      console.log(receivedProp.registerBizMessage.message)
      this.props.history.push("/businesses")
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
                <button type="submit" className="btn btn-primary" style={{width: '50%', marginLeft: '25%', backgroundColor: '#fff', borderColor: '#14a2b8', color: '#14a2b8'}}>Register</button>
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
