import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { getBusinesses } from '../actions/getAllBusinessesActions';
import AuthNavigationBar from './authNavigationBar';

class BusinessesList extends Component {

  // componentDidMount(){
  //   this.props.dispatch(getBusinesses());
  // }

  render() {
    return (
      <div className="businessesList">
        <AuthNavigationBar/>
        <br/><br/>
        <div className="container">
          <h2>Businesses</h2>
          <hr/>
          <br/>
          <div className="row">
              <div>
                <a href ="/register-business">
                  <button type="button" className="btn btn-info btn-sm">Register Business</button>
                </a>
              </div>
              <div style={{marginLeft:'80px',}}><strong>&nbsp;&nbsp;&nbsp;Filter By:&nbsp;&nbsp;&nbsp;</strong>
                <div className="btn-group">
                  <a className="btn btn-info btn-sm dropdown-toggle" data-toggle="dropdown" href="#">Location <span className="caret"></span></a>&nbsp;&nbsp;&nbsp;
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><a href="#">Kabarole</a>
                    </li>
                    <li className="dropdown-item"><a href="#">Kampala</a>
                    </li>
                    <li className="dropdown-item"><a href="#">Gulu</a>
                    </li>
                    <li className="dropdown-item"><a href="#">Soroti</a>
                    </li>
                    <li className="dropdown-item"><a href="#">Hoima</a>
                    </li>
                    <li className="divider dropdown-item"></li>
                    <li className="dropdown-item"><a href="#">Other</a>
                    </li>
                    </ul>
                </div>
                <div className="btn-group"> <a className="btn btn-info btn-sm dropdown-toggle" data-toggle="dropdown" href="#">Category <span className="caret"></span></a>
					        <ul className="dropdown-menu">
                      <li className="dropdown-item"><a href="#">Telecommunications</a>
                      </li>
                      <li className="dropdown-item"><a href="#">Food and Bar</a>
                      </li>
                      <li className="dropdown-item"><a href="#">Computing and Technology</a>
                      </li>
                      <li className="dropdown-item"><a href="#">Hotels and Accommodation</a>
                      </li>
                      <li className="dropdown-item"><a href="#">Arts and Crafts</a>
                      </li>
                      <li className="divider dropdown-item"></li>
                      <li className="dropdown-item"><a href="#">Other</a>
                      </li>
                  </ul>
				        </div>
              </div>
              <div>
                <div className="input-group" style={{marginLeft:'120px',}}>
                  <input type="text" className="form-control" placeholder="Search" name="search" style={{height:'38px',}}/>
                  <div className="input-group-btn">
                  <button type="button" className="btn btn-info btn-sm" style={{borderRadius:'unset',}}>search</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

// BusinessesList.propTypes = {
//   userSignMessage: PropTypes.object.isRequired,
//   userLoginMessage: PropTypes.object.isRequired
// }

export default BusinessesList;