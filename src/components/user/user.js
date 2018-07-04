import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {NotificationManager} from 'react-notifications';
import $ from 'jquery';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../navBar/navigationBar';
import {receivedDataStringify} from '../helper/utilities';
import {signUp, logIn} from '../../actions/userActions';
import SubmitButton from '../helper/submitButton';

class User extends Component {

  componentWillReceiveProps(receivedProp){
    if(receivedProp.userSignMessage.Message){
      console.log(receivedProp.userSignMessage)
      if(receivedProp.userSignMessage.Message !== "User registered!"){
        NotificationManager.error(receivedProp.userSignMessage.Message,"", 5000);
      }
      else{
        NotificationManager.success("User registered!","", 5000)
        document.location.replace("/")
      }
    } 
    else{
      if(receivedProp.userLoginMessage.token){
        sessionStorage.setItem('access_token', receivedProp.userLoginMessage.token)
        this.props.history.push("/businesses")
      }
      else {
        NotificationManager.error("Wrong password or Incorrect email entered!", "", 5000);
      }
    }
  }
  
  //Function to register a user. Picks values from the register form and sends it to the DB
  registerUser=(event)=>{
    event.preventDefault();
    let userData={
      user_name:event.target.elements.userNameReg.value,
      user_email:event.target.elements.emailReg.value,
      user_password:event.target.elements.psswdReg.value
    };
    if (event.target.elements.psswdReg.value !== event.target.elements.psswd1Reg.value){
      NotificationManager.error("Passwords donot match!", "", 5000);
    }else{
      this.props.signUp(receivedDataStringify(userData))
    }
    
  }

  //Function to login a user
  loginUser=(event)=>{
    event.preventDefault();
    let userData={
      user_email:event.target.elements.email.value,
      user_password:event.target.elements.password.value
    };
    this.props.logIn(receivedDataStringify(userData))
  }

  render() {
    //Used to display tooltips in the input fields
    $(document).ready(function(){
        $('[data-toggle="popover"]').popover();   
    });
    
    return (
      <div className="User">
      <NavigationBar/>
        <div className="container">
          <h3 style={{color:'#505050'}}>
            <br/>
              WeConnect provides a platform that brings businesses and individuals together.<br/><br/>
              This platform creates awareness for businesses and gives the user the ability to write reviews about the 
              businesses they have interacted with.
            <br/><br/>
          </h3>
          <h1 style={{color:'rgb(20, 162, 184)', textAlign:'center'}}>Express Yourself. Let them know!</h1><br/><br/>
          <div className="row" style={{border:'5px solid #17a2b8'}}>
            <div className="col-6 bg-light" id="login">
            <br/><h2 style={{color:'#17a2b8'}}>Login</h2><br/><br/>
              <form onSubmit={this.loginUser}  className="userLogin">
                <div className="form-group" style={{border: '2px solid #14a2b8', borderRadius: '7px'}}>
                  <input type="email" className="form-control" id="emailLogin" placeholder="Enter email" name="email" required="required" />
                </div>
                <div className="form-group" style={{border: '2px solid #14a2b8', borderRadius: '7px'}}>
                  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" required="required" />
                </div>
                <div className="form-check">
                  <label className="form-check-label" style={{color:'#17a2b8', float:'left'}}>
                    <input className="form-check-input" type="checkbox" name="remember"/> Remember me</label>
                </div><br /><br/>
                <div id="login">
                  <SubmitButton/>
                </div>
                <a className="btn btn-link" href="/" style={{color:'#17a2b8', float:'left'}}>Forgot Your Password?</a>
              </form><br /><br />
            </div>
            <div className="col-6 bg-info" id="userReg">
              <br/><h2 style={{color:'#fff'}}>Register Account</h2><br/><br/>
              <form onSubmit={this.registerUser} className="userRegister">
                <div className="form-group">
                  <input type="text" className="form-control" id="userName" placeholder="Enter a Username" name="userNameReg" required="required" />
                </div>
                <div className="form-group">
                  <input data-toggle="popover" title="Email Guideline" data-content="Email example: weconnect@gmail.com" type="email" className="form-control" id="emailReg" placeholder="name@example.com" name="emailReg" required="required" />
                </div>
                <div className="form-group">
                  <input data-toggle="popover" title="Password Guideline" data-content="Password should be atleast 8 characters long" type="password" className="form-control" id="psswdReg" placeholder="Enter password" name="psswdReg" required="required"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="psswd1" placeholder="Confirm password" name="psswd1Reg" required="required" />
                </div>
                <button type="submit" className="btn btn-light" style={{color:'#17a2b8'}}>Register</button>
              </form><br /><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  signUp:PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  user:PropTypes.object,
  userSignMessage: PropTypes.object.isRequired,
  userLoginMessage: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  userSignMessage: state.user.signUpMessage,
  userLoginMessage: state.user.loggedInToken
});

export default withRouter(connect(mapStateToProps, {signUp, logIn})(User));
