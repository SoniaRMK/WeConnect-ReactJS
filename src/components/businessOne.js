import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import decode from 'jwt-decode';
import {NotificationManager} from 'react-notifications';
import changeCase from 'change-case';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getBusiness, deleteBusiness, addReview, getReviews } from '../actions/getOneBusinessActions';
import AuthNavigationBar from './authNavigationBar';

class BusinessOne extends Component {

  componentDidMount=()=>{

    var userToken = sessionStorage.getItem("access_token");
    var userDecoded = decode(userToken);
    if ((userToken !== null) && (userDecoded.exp > Date.now() / 1000)) {
      const bizId = this.props.match.params.bizid
      this.props.getBusiness(bizId)
      this.props.getReviews(bizId);
    }
    else {
      this.props.history.push("/")
    }
  }

  deleteOneBusiness=()=>{
    const popup = window.confirm('Are you sure you want to delete this business?'); 
    if (popup === true) {
      this.props.deleteBusiness(this.props.match.params.bizid)
      this.props.history.push("/businesses")
      NotificationManager.success("Business successfully deleted", "", 5000);
    }
    
  }

  reviewBusinessDataStringify = (object) =>{
    let simpleObj={};
        for (let prop in object){
            if (!object.hasOwnProperty(prop)){
                continue;
            }
            if (typeof(object[prop]) === 'object'){
                continue;
            }
            simpleObj[prop] = object[prop];
        }
        return JSON.stringify(simpleObj);
      }

  addOneReview=(event)=>{
    event.preventDefault();
    let reviewBusinessData={
      review_title:event.target.elements.reviewTitle.value,
      review_msg:event.target.elements.reviweMsg.value
    };
    const bizId = this.props.match.params.bizid
    this.props.addReview(bizId, this.reviewBusinessDataStringify(reviewBusinessData))
    window.location.reload();
  }

  notificationMessage=()=>{
      if(this.props.getReviewsMessage.message === "Business doesn't have reviews yet!!"){
        document.getElementById("noReviews").className = "show";
    }
  }

  render() {

    const oneBusiness=this.props.getBusinessMessage.business;
    const reviews=Object.values({...this.props.getReviewsMessage.Reviews});
    
    if(oneBusiness){
      console.log(oneBusiness)
      var businessID = oneBusiness.id
      var businessCreatedBy = oneBusiness.CreatedBy
      var businessName = oneBusiness.BusinessName
      var businessProfile = oneBusiness.BusinessProfile
      var businessCategory = oneBusiness.Category
      var businessLocation = oneBusiness.Location
    }
    var userToken = sessionStorage.getItem("access_token");
    var userDecoded = decode(userToken);
    if (userDecoded.username === businessCreatedBy){
      document.getElementById("deleteEdit").className = "row show";
      document.getElementById("line").className = "show";
      document.getElementById("addReviewDiv").className = "collapse";
    }
    if (reviews){
      Array.prototype.reverse.call(reviews)
    }       
    
    return (
      <div className="App">
        <AuthNavigationBar/>
         <div className="container">
          <br /><br /><h1>{businessName}</h1> <hr /> 
          <div className="row collapse" id="deleteEdit">   
            <button type="submit" className="btn btn-info" style={{marginLeft: '20px'}}><NavLink to={`/edit-business/${businessID}`} style={{textDecoration: 'None', color: 'white'}}>Update</NavLink></button>&nbsp;
            <form onSubmit={this.deleteOneBusiness}><button type="submit" className="btn btn-danger">Delete</button></form>
          </div>
          <hr className="collapse" id="line"/>
          <div className="row"><br />
            <div className="col bg-info">
              <h3 style={{textAlign:'center', color: '#000'}}><br />About {businessName}</h3>
              <h6 style={{textAlign:'center', color: '#f0f8ff'}}>{businessCategory} | {businessLocation}</h6>
              <hr style={{backgroundColor: '#000'}}/>
              <p>
                {businessProfile}
              </p>
            </div>
            <div className="col bg-light show" id="addReviewDiv" style={{border: '2px solid #14a2b8'}}>
              <h3 style={{textAlign: 'center', color:'#17a2b8'}}><br />Add a Review</h3><br/>
              <form onSubmit={this.addOneReview}>
                <div className="form-group" style={{border: '2px solid #14a2b8', borderRadius: '7px'}}>
                  <input type="text" className="form-control" name="reviewTitle" placeholder="Enter the review title" required="required"/>
                </div>
                <div className="form-group" style={{border: '2px solid #14a2b8', borderRadius: '7px'}}>
                  <textarea className="form-control" rows={5} name="reviweMsg" placeholder="Enter the review message" required="required"/>
                </div><br /><br />
                <div className="form-group">
                  <button type="submit" className="btn btn-info" style={{width: '50%', marginLeft: '25%', borderColor: '#14a2b8', color: '#fff'}}>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col bg-white" style={{border: '2px solid #14a2b8'}}>
              <h3 onClick={this.notificationMessage} style={{textAlign: 'center', color:'rgb(240, 248, 255)', cursor:' pointer', background: '#14a2b8', paddingBottom: '30px', marginTop: '20px', borderRadius: '10px'}} data-toggle="collapse" data-target="#reviews"><br />View Reviews</h3>
              <table className="table table-striped" id="reviews">
                <tbody>
                  <tr className="collapse" id="noReviews"><th style={{textAlign: 'center', fontSize: '1.5em'}}>No reviews yet</th></tr>
                  {reviews.map((review, index) =>(
                  <tr className="show" id="reviews" key={index+1} style={{borderBottom: '6px solid #14a2b8', borderTop: '6px solid #14a2b8'}}>
                    <th  style={{color: '#14a2b8'}}>{review['Review Title']}</th>
                    <td>{review['Review Message']} <br/><br/><strong><i>Reviewed By: {changeCase.titleCase(review['Reviewd By'])}</i></strong></td>
                  </tr>)
                  )}
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
  deleteBusinessMessage: PropTypes.object.isRequired,
  addReviewMessage: PropTypes.object.isRequired,
  getReviewsMessage: PropTypes.object.isRequired,
  getBusiness:PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired,
  addReview:PropTypes.func.isRequired,
  getReviews: PropTypes.func.isRequired,
  business: PropTypes.object
}

const mapStateToProps = state =>({
  getBusinessMessage:state.getBusiness.getBusinessMessage,
  deleteBusinessMessage:state.getBusiness.deleteBusinessMessage,
  addReviewMessage: state.getBusiness.addReviewMessage,
  getReviewsMessage: state.getBusiness.getReviewsMessage
});

export default withRouter(connect(mapStateToProps,{getBusiness, deleteBusiness, addReview, getReviews})(BusinessOne));
