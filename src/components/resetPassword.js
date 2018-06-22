import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import AuthNavigationBar from './authNavigationBar';
import {resetPassword} from '../actions/userActions';

class ResetPassword extends Component {

  componentWillReceiveProps(receivedProp){
    console.log(receivedProp)
    if(receivedProp.resetPasswordMessage.message){
      console.log(receivedProp.resetPasswordMessage.message)
      
      this.props.history.push("/")
    }
  }
  
  userDataStringify = (object) =>{
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

  resetUserPassword=(event)=>{
    event.preventDefault();
    let userData={
      user_email:event.target.elements.email.value,
      user_password:event.target.elements.psswd.value
    };
    console.log(userData);
    this.props.resetPassword(this.userDataStringify(userData))
  }

  render() {
    return (
      <div className="ResetPassword">
        <AuthNavigationBar/>     
        <div className="container">
         <br/><br/><br/>
          <div className="row" style={{border:'5px solid #17a2b8'}}>
            <div className="col-12 bg-info" id="resetpassword">
              <br/><h2 style={{color:'#fff', textAlign: 'center'}}>Reset Password</h2><br/><br/>
              <form onSubmit={this.resetUserPassword}>
                <div className="form-group">
                  <input type="email" className="form-control" id="emailReg" placeholder="Enter email" name="email" required="required" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="psswd" placeholder="Enter password" name="psswd" required="required"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="psswd1" placeholder="Confirm password" name="psswd1" required="required" />
                </div><br/>
                <button type="submit" className="btn btn-light" style={{color:'#17a2b8'}}>Reset Password</button>
              </form><br /><br />
            </div>
          </div><br/><br/><br/><br/><br/>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  resetPassword:PropTypes.func.isRequired,
  user:PropTypes.object,
  resetPasswordMessage: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  resetPasswordMessage: state.user.resetPasswordMessage
});

export default withRouter(connect(mapStateToProps, {resetPassword})(ResetPassword));
