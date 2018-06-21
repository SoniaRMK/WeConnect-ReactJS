import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import User from './user';
import FooterBar from './footerBar';
import BusinessOne from './businessOne';
import BusinessesList from './businessesList';
import Contact from './contact';
import BusinessRegister from './businessRegister';

class Index extends Component {
  

  render() {
    const Routes = () => (
      <Router>
        <div>
          <Route exact strict path={"/"} component={User}/>
          <Route exact strict path={"/businesses/:bizid"} component={BusinessOne}/>
          <Route exact strict path={"/businesses"} component={BusinessesList}/>
          <Route exact strict path={"/register-business"} component={BusinessRegister}/>
          <Route exact strict path={"/contact"} component={Contact}/>
        </div>
      </Router>
    )
    return (
      <div className="App" style={{ background:'aliceblue' }}>
        <Routes/>
        <FooterBar/>
      </div>
    );
  }
}

export default Index;
