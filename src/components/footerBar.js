import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class FooterBar extends Component {

  render() {
    return (
      <div className="footerBar">
         <hr/>
        <div className="row">
          <div className="col-xl-12">
            <ul className="nav nav-pills nav-justified">
              <li className="nav-item"><a href="/" className="nav-link" style={{color:'#17a2b8'}}>© 2018 WeConnect.</a></li>
              <li className="nav-item"><a href="/" className="nav-link" style={{color:'#17a2b8'}}>Terms of Service</a></li>
              <li className="nav-item"><a href="/" className="nav-link" style={{color:'#17a2b8'}}>Privacy Policy</a></li>
            </ul>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterBar;