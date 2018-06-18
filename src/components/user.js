import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './navigationBar';
import {signUp, logIn} from '../actions/userActions';

class User extends Component {

  componentWillReceiveProps(receivedProp){
    console.log(receivedProp)
    if(receivedProp.userSignMessage.message){
      console.log(receivedProp.userSignMessage.message)}
    else {
      if(receivedProp.userLoginMessage.token){
      sessionStorage.setItem('access_token', receivedProp.userLoginMessage.token)
      this.props.history.push("/businesses")}
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

  registerUser=(event)=>{
    event.preventDefault();
    let userData={
      user_name:event.target.elements.userName.value,
      user_email:event.target.elements.email.value,
      user_password:event.target.elements.psswd.value
    };
    console.log(userData);
    this.props.signUp(this.userDataStringify(userData))
  }

  loginUser=(event)=>{
    event.preventDefault();
    let userData={
      user_email:event.target.elements.email.value,
      user_password:event.target.elements.password.value
    };
    console.log(userData);
    this.props.logIn(this.userDataStringify(userData))
  }

  render() {
    return (
      <div className="User">
        <NavigationBar/>     
        <div className="container">
          <h3 style={{color:'#505050'}}>
            <br/>
              WeConnect provides a platform that brings businesses and individuals together.<br/><br/>
              This platform creates awareness for businesses and   gives the users the ability to write reviews about the 
              businesses they have interacted with. 
            <br/><br/>
          </h3>
          <div className="row" style={{border:'5px solid #17a2b8'}}>
            <div className="col-6 bg-light" id="login">
            <br/><h2 style={{color:'#17a2b8'}}>Login</h2><br/><br/>
              <form onSubmit={this.loginUser}>
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
                <button type="submit" className="btn btn-info" style={{float:'left'}}>Submit</button>
                <a className="btn btn-link" href="#" style={{color:'#17a2b8', float:'left'}}>Forgot Your Password?</a>
              </form><br /><br />
            </div>
            <div className="col-6 bg-info" id="userReg">
              <br/><h2 style={{color:'#fff'}}>Register Account</h2><br/><br/>
              <form onSubmit={this.registerUser}>
                <div className="form-group">
                  <input type="text" className="form-control" id="userName" placeholder="Enter a Username" name="userName" required="required" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="emailReg" placeholder="Enter email" name="email" required="required" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="psswd" placeholder="Enter password" name="psswd" required="required"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="psswd1" placeholder="Confirm password" name="psswd1" required="required" />
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
