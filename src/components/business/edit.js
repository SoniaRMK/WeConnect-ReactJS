import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import decode from 'jwt-decode';
import {NotificationManager} from 'react-notifications';

import Weconnect from '../../store';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { editBusiness } from '../../actions/getOneBusinessActions';
import AuthNavigationBar from '../navBar/authNavigationBar';
import {receivedDataStringify} from '../helper/utilities';

class EditBusiness extends Component {

  componentDidMount=()=>{

    //check validity of token before mounting the component
    var userToken = sessionStorage.getItem("access_token");
    const userDecoded = decode(userToken);
    if ((userToken === null) || (userDecoded.exp < Date.now() / 1000)) {
      this.props.history.push("/")
    }
  }

  componentWillReceiveProps(receivedProp){
    if(receivedProp.editBusinessMessage.message){
      if(receivedProp.editBusinessMessage.message === "Business successfully Updated!"){
        NotificationManager.success("Business successfully Updated!","", 5000);
        document.location.replace("/businesses")
      }else{
        NotificationManager.error(receivedProp.registerBizMessage.message,"", 5000);
        console.log(receivedProp.editBusinessMessage.message)
      }
    }
    
  }

  //Function to edit a business
  editOneBusiness=(event)=>{
    event.preventDefault();
    let businessData={
      business_name:event.target.elements.businessName.value,
      business_profile:event.target.elements.descr.value,
      location:event.target.elements.location.value,
      category:event.target.elements.category.value
    };
    const bizId = Weconnect.getState().getBusiness.getBusinessMessage.business.id
    this.props.editBusiness(bizId, receivedDataStringify(businessData))
  }

  render() {

    /* This makes sure that the edit business form is populated with the previous values 
       before rendering it for easier editing */
    if(Weconnect.getState().getBusiness.getBusinessMessage.business){
      var businessName = Weconnect.getState().getBusiness.getBusinessMessage.business.BusinessName;
      var businessProfile = Weconnect.getState().getBusiness.getBusinessMessage.business.BusinessProfile;
      var businessLocation = Weconnect.getState().getBusiness.getBusinessMessage.business.Location;
      var businessCategory = Weconnect.getState().getBusiness.getBusinessMessage.business.Category;
      }

    return (
      <div className="businessRegister">
        <AuthNavigationBar/>
        <br/><br/><br/>
       <div className="container">
        <div className="row">
            <div className="col bg-info">
              <h4 style={{textAlign: 'center', color: '#fff', fontWeight: 'bolder'}}><br />Edit business</h4><br/>
              <form onSubmit={this.editOneBusiness}>
                <div className="form-group">
                  <input type="text" className="form-control" defaultValue={businessName} id="businessName" placeholder="Enter Business Name" name="businessName" required="required" />
                </div>
                <div className="form-group">
                  <select className="form-control" id="location" name="location" required="required">
                    <option defaultValue="{businessLocation}">{businessLocation}</option> 
                    <option value="Mbarara">Mbarara</option>
                    <option value="Kampala">Kampala</option>
                    <option value="Gulu">Gulu</option>
                    <option value="Soroti">Soroti</option>
                    <option value="Hoima">Hoima</option>
                    <option value="Kabarole">Kabarole</option>
                  </select>
                  <br />
                  <select className="form-control" id="category" name="category" required="required">
                    <option defaultValue="{businessCategory}">{businessCategory}</option>  
                    <option value="Consulting">Consulting</option>
                    <option value="Telecommunications">Telecommunications</option>
                    <option value="Food and Beverages">Food and Beverages</option>
                    <option value="Computing and Technology">Computing and Technology</option>
                    <option value="Hotels and Accommodation">Hotels and Accommodation</option>
                    <option value="Arts and Crafts">Arts and Crafts</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" defaultValue={businessProfile} placeholder="Enter Description of the business" id="descr" name="descr" required="required" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" style={{width: '25%', marginLeft: '25%', backgroundColor: '#fff', borderColor: '#14a2b8', color: '#14a2b8'}}>Update</button>
                <a className="btn btn-warning" style={{width: '25%', borderColor: '#14a2b8', color: '#fff'}} href="/businesses" role="button">Cancel</a>
              </form><br /><br />
            </div>
        </div>
        </div><br/><br/><br/>
      </div>
    );
  }
}

EditBusiness.propTypes = {
  editBusiness:PropTypes.func.isRequired,
  editBusinessMessage: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  editBusinessMessage:state.getBusiness.editBusinessMessage,
});

export default withRouter(connect(mapStateToProps, {editBusiness})(EditBusiness));
