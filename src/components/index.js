import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';

import 'bootstrap/dist/css/bootstrap.min.css';
import User from './user/user';
import FooterBar from './navBar/footerBar';
import BusinessOne from './business/business';
import BusinessesList from './business/businesses';
import BusinessRegister from './business/register';
import EditBusiness from './business/edit';
import ResetPassword from './user/resetPassword';
import LogoutUser from './user/logout';

class Index extends Component {
  

  render() {
    const Routes = () => (
      <Router>
        <div>
          <Route exact strict path={"/"} component={User}/>
          <Route exact strict path={"/businesses/:bizid"} component={BusinessOne}/>
          <Route exact strict path={"/businesses"} component={BusinessesList}/>
          <Route exact strict path={"/register-business"} component={BusinessRegister}/>
          <Route exact strict path={"/edit-business/:businessID"} component={EditBusiness}/>
          <Route exact strict path={"/reset-password"} component={ResetPassword}/>
          <Route exact strict path={"/logout"} component={LogoutUser}/>
        </div>
      </Router>
    )
    return (
      <div className="App" style={{ background:'aliceblue' }}>
        <Routes/>
        <NotificationContainer/>
        <FooterBar/>
      </div>
    );
  }
}

export default Index;
