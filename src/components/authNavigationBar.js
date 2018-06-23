import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

class AuthNavigationBar extends Component {

  render() {
    return (
      <div className="navigationBar">
         <nav className="navbar navbar-expand-md bg-info navbar-dark">
          <div className="container"> 
              <a className="navbar-brand" href="/" style={{color: '#fff', fontSize: '26px', fontWeight: 'bold'}}>WeConnect</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{border: '2px solid'}}>
                  <span className="navbar-toggler-icon" style={{border: '2px solid'}}></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="nav navbar-nav ml-auto" style={{fontSize: '18px'}}>
                      <li className="nav-item"><a href="/businesses" style={{color: '#fff'}} className="nav-link">Businesses</a></li>
                      <li className="nav-item"><a href="/reset-password" style={{color: '#fff'}} className="nav-link">Reset Password</a></li>
                      <li className="nav-item"><a href="/" style={{color: '#fff'}} className="nav-link">Logout</a></li>
                      <li className="nav-item"><a href="/contact" style={{color: '#fff'}} className="nav-link">Contact</a></li>
                  </ul>
              </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default AuthNavigationBar;