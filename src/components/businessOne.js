import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { getBusiness } from '../actions/getOneBusinessActions';
import AuthNavigationBar from './authNavigationBar';

class BusinessOne extends Component {

  componentWillMount=()=>{
    this.props.getBusiness();
  }

  // const business = this.props.getBusinessMessage;
  //   if (business){
  //     Array.prototype.reverse.call(business)
  //   }

  render() {
    return (
      <div className="App">
        <AuthNavigationBar/>
         <div className="container">
          <br /><br /><h1>BusinessName</h1> <hr />  
          <button type="submit" className="btn btn-info">Update</button> &nbsp;
          <button type="submit" className="btn btn-danger">Delete</button>
          <hr /><br />
          <div className="row">
            <div className="col bg-info">
              <h3><br />About BusinessName</h3>
              <p>
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar
                elit a elit aliquam, non iaculis ex eleifend. Sed enim orci, iaculis eu
                ipsum at, accumsan scelerisque lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
                in quam viverra mi sagittis pretium quis a tortor. Ut congue gravida suscipit.
                <br />
                <br />Nunc blandit nibh non enim auctor, in pharetra tortor elementum. Mauris
                nec quam ut enim posuere posuere in eu lacus. Sed pharetra varius magna
                sed elementum. Curabitur convallis dui tellus, et lobortis urna porttitor
                vitae. Cras at enim justo. Etiam euismod elit sapien, eget congue dolor
                convallis sollicitudin.
              </p>
            </div>
            <div className="col bg-light">
              <h3 style={{textAlign: 'center', color:'#17a2b8'}}><br />Add a Review</h3><br/>
              <form action="#">
                <div className="form-group" style={{border: '2px solid #14a2b8', borderRadius: '7px'}}>
                  <input type="text" className="form-control" id="reviewTitle" placeholder="Enter the review title" required="required"/>
                </div>
                <div className="form-group" style={{border: '2px solid #14a2b8', borderRadius: '7px'}}>
                  <textarea className="form-control" rows={5} id="reviweMsg" placeholder="Enter the review message" required="required"/>
                </div><br /><br />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary" style={{width: '50%', marginLeft: '25%', backgroundColor: '#14a2b8', borderColor: '#14a2b8', color: '#fff'}}>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col bg-white">
              <h3 style={{textAlign: 'center', color:'#17a2b8'}}><br />Reviews</h3>
              <hr/>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>Review Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Review Message</td>
                  </tr>
                </tbody>
              </table>
              <br /><br />
            </div>
          </div>
      </div>
    </div>
    );
  }
}

BusinessOne.propTypes = {
  getBusinessMessage: PropTypes.object.isRequired,
  getBusiness:PropTypes.func.isRequired,
  business: PropTypes.object
}

const mapStateToProps = state =>({
  getBusinessMessage:state.getBusiness.getBusinessMessage,
  getBusiness:PropTypes.func.isRequired,
  business:state.getBusiness.getBusinessMessage
});

export default withRouter(connect(mapStateToProps,{getBusiness})(BusinessOne));
