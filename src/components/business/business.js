import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import decode from 'jwt-decode';
import {NotificationManager} from 'react-notifications';
import changeCase from 'change-case';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getBusiness, deleteBusiness, addReview, getReviews } from '../../actions/getOneBusinessActions';
import AuthNavigationBar from '../navBar/authNavigationBar';
import {receivedDataStringify} from '../helper/utilities';


/**
 * Business Component where a logged in user can view a business, add a review and view all the reviews.
 * Also, a user is able to delete or edit a business they created via this component
 * 
 * ```html
 * <BusinessOne />
 * ```
 */
class BusinessOne extends Component {

  componentDidMount=()=>{

    //check validity of token before mounting the component
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

  //Function to delete a business
  deleteOneBusiness=()=>{
    const popup = window.confirm('Are you sure you want to delete this business?'); 
    if (popup === true) {
      this.props.deleteBusiness(this.props.match.params.bizid)
      this.props.history.push("/businesses")
      NotificationManager.success("Business object successfully deleted", "", 5000);
    }
    
  }

  tryMe=()=>{
    alert("Yay! You're a strong one");
    
  }

  //Function to a add to review to a business
  addOneReview=(event)=>{
    event.preventDefault();
    let reviewBusinessData={
      review_title:event.target.elements.reviewTitle.value,
      review_msg:event.target.elements.reviweMsg.value
    };
    const bizId = this.props.match.params.bizid
    this.props.addReview(bizId, receivedDataStringify(reviewBusinessData))
    window.location.reload();
  }

  //Notification for when a business has no reviews
  notificationMessage=()=>{
      if(this.props.getReviewsMessage.message === "Business object doesn't have reviews yet!!"){
        document.getElementById("noReviews").className = "show";
    }
  }

  //hide edit and delete buttons on the business page when a logged in user did not create the business
  hideEditButtons=(userDecoded, businessCreatedBy)=>{
    if (userDecoded.username === businessCreatedBy){
      return "row show"
    }else{
      return "row collapse"
    }
  }

  //hide the add review form if the user who created the business is viewing the business
  hideAddReviewForm=(userDecoded, businessCreatedBy)=>{
    if (userDecoded.username === businessCreatedBy){
      return "collapse"
    }else{
      return "col bg-light show"
    }
  }

  //hide the line for a better view when the edit and delete buttons are hidden
  hideLine=(userDecoded, businessCreatedBy)=>{
    if (userDecoded.username === businessCreatedBy){
      return "show"
    }else{
      return "collapse"
    }
  }

  render() {

    const oneBusiness=this.props.getBusinessMessage.business;
    const reviews=Object.values({...this.props.getReviewsMessage.Reviews});
    
    if(oneBusiness){
      var businessID = oneBusiness.id
      var businessCreatedBy = oneBusiness.CreatedBy
      var businessName = oneBusiness.BusinessName
      var businessProfile = oneBusiness.BusinessProfile
      var businessCategory = oneBusiness.Category
      var businessLocation = oneBusiness.Location
    }

    //condition to either show or hide the Delete and Update buttons depending on the logged in user
    var userToken = sessionStorage.getItem("access_token");
    var userDecoded = decode(userToken);
    let EditDeleteButtonClass = this.hideEditButtons(userDecoded, businessCreatedBy)
    let LineClass = this.hideLine(userDecoded, businessCreatedBy)
    let addReviewClass = this.hideAddReviewForm(userDecoded, businessCreatedBy)

    if (reviews){
      Array.prototype.reverse.call(reviews)
    }       
    
    return (
      <div className="App">
        <AuthNavigationBar/>
         <div className="container">
          <br /><br /><h1>{businessName}</h1> <hr /> 
          <div className={EditDeleteButtonClass} id="deleteEdit">   
            <button type="submit" className="btn btn-info" style={{marginLeft: '20px'}}><NavLink to={`/edit-business/${businessID}`} style={{textDecoration: 'None', color: 'white'}}>Update</NavLink></button>&nbsp;
            <form onSubmit={this.deleteOneBusiness} className="deleteBusiness"><button type="submit" className="btn btn-danger">Delete</button></form>
          </div>
          <hr className={LineClass} id="line"/>
          <div className="row"><br />
            <div className="col bg-info">
              <h3 style={{textAlign:'center', color: '#000'}}><br />About {businessName}</h3>
              <h6 style={{textAlign:'center', color: '#f0f8ff'}}>{businessCategory} | {businessLocation}</h6>
              <hr style={{backgroundColor: '#000'}}/>
              <p>
                {businessProfile}
              </p>
            </div>
            <div className={addReviewClass} id="addReviewDiv" style={{border: '2px solid #14a2b8'}}>
              <h3 style={{textAlign: 'center', color:'#17a2b8'}}><br />Add a Review</h3><br/>
              <form onSubmit={this.addOneReview} className="addReviewForm">
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
