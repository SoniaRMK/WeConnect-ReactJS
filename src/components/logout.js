import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {logOut} from '../actions/userActions';

class LogoutUser extends Component {

  componentDidMount(){
    this.props.logOut()
    sessionStorage.removeItem("access_token")
    this.props.history.push("/")
    }

  render() {
    return (
      <p>Logging out...</p>
    );
  }
}

LogoutUser.propTypes = {
  logOut:PropTypes.func.isRequired,
  user:PropTypes.object,
  userLogoutMessage: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  userLogoutMessage: state.user.loggedOutMessage
});

export default withRouter(connect(mapStateToProps, {logOut})(LogoutUser));
