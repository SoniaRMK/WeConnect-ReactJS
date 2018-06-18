import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

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
                      <li className="nav-item"><a href="/contact" style={{color: '#fff'}} className="nav-link">Contact</a></li>
                      <li className="nav-item"><a href="/index" style={{color: '#fff'}} className="nav-link">Logout</a></li>
                      <li className="nav-item dropdown"><a href="#" style={{color: '#fff'}} className="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="Logos/profilepc.png" className="rounded-circle" alt="Profile" width={30} height={30} /> </a>
                        <div className="dropdown-menu">
                            <a className="dropdownItem" href="#" style={{fontWeight: 'bold', color: '#007bff', textAlign: 'center'}}>Hi Sonia RM</a><hr />
                            <a className="dropdownItem" href="/userdashboard">My Businesses</a>
                            <a className="dropdownItem" href="#" data-toggle="modal" data-target="#changePsswdModal">Change Password</a>
                            <a className="dropdownItem" href="#">Change Display Name</a>
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