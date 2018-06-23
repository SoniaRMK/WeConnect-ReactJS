import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import decode from 'jwt-decode';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { getBusinesses } from '../actions/getAllBusinessesActions';
import AuthNavigationBar from './authNavigationBar';

class BusinessesList extends Component {

  componentWillMount=()=>{

    var userToken = sessionStorage.getItem("access_token");
    const userDecoded = decode(userToken);
    if ((userToken !== null) && (userDecoded.exp > Date.now() / 1000)) {
      this.props.getBusinesses();
    }
    else{
      this.props.history.push("/")
    }
  }

  render() {

    const businesses=Object.values({...this.props.getBusinessesMessage});
    if (businesses){
      Array.prototype.reverse.call(businesses)
    }

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
              <div>
              <br/><br/>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th>Business Name</th>
                      <th>Category</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businesses.map((business, index) =>
                    <tr key={business[index].id}>
                    <td><a href="/businesses/${bizid}"> {business[index].BusinessName}</a></td>
                    <td> {business[index].Category}</td>
                    <td> {business[index].Location}</td>
                    {console.log(business)}
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

BusinessesList.propTypes = {
  getBusinessesMessage: PropTypes.object.isRequired,
  businesses: PropTypes.object
}

const mapStateToProps = state =>({
  getBusinessesMessage:state.getBusinesses.getBusinessesMessage,
  getBusinesses:PropTypes.func.isRequired,
  businesses:state.getBusinesses.getBusinessesMessage
});

export default withRouter(connect(mapStateToProps,{getBusinesses})(BusinessesList));