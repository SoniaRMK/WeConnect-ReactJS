import React, { Component } from 'react';
import decode from 'jwt-decode';
import changeCase from 'change-case';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


/**
 * Navigation Bar Component when user is logged in.
 * 
 * ```html
 * <AuthNavigationBar />
 * ```
 */
class AuthNavigationBar extends Component {

  //function to display the user name of the user logged in
  userNameCase=()=>{
    var userToken = sessionStorage.getItem("access_token");
    var userDecoded = decode(userToken);
    var userName = changeCase.titleCase(userDecoded.username);
    return userName
  }; 
  
  render() {
    
    return (
      <div className="navigationBar">
         <nav className="navbar navbar-expand-md bg-info navbar-dark" style={{cursor: 'pointer'}}>
          <div className="container"> 
              <a className="navbar-brand" style={{color: '#fff', fontSize: '26px', fontWeight: 'bold'}}>WeConnect</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{border: '2px solid'}}>
                  <span className="navbar-toggler-icon" style={{border: '2px solid'}}></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="nav navbar-nav ml-auto" style={{fontSize: '18px'}}>
                      <li className="nav-item"><a href="/businesses" style={{color: '#fff'}} className="nav-link">Businesses</a></li>
                      <li className="nav-item"><a style={{color: '#fff'}} className="nav-link">Contact</a></li>
                      <li className="nav-item">
                        <div className="dropdown">
                          <a style={{color: '#fff'}} className="nav-link dropdown-toggle" data-toggle="dropdown">Hello {this.userNameCase()}</a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="/reset-password">Reset Password</a>
                            <a className="dropdown-item" href="/logout">Logout</a>
                          </div>
                        </div>
                      </li>
                      
                  </ul>
              </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default AuthNavigationBar;