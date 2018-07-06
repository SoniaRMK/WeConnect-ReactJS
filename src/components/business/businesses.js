import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import decode from 'jwt-decode';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { getBusinesses } from '../../actions/getAllBusinessesActions';
import AuthNavigationBar from '../navBar/authNavigationBar';
import SearchFilters from './searchForm';
import TableList from './tableList';


/**
 * Businesses Component where a logged in user can view all businesses paginated.
 * A user can also search for a business(es) and filter out businesses by category and
 * /or location.
 * 
 * ```html
 * <BusinessesList />
 * ```
 */
class BusinessesList extends Component {

  componentDidMount=()=>{

    //check validity of token before mounting the component
    var userToken = sessionStorage.getItem("access_token");
    const userDecoded = decode(userToken);
    if ((userToken !== null) && (userDecoded.exp > Date.now() / 1000)) {
      this.props.getBusinesses();
    }
    else{
      this.props.history.push("/")
    }
  }

  //Function to receive the search and filter values from the user
  filterBusinesses=(event)=>{
    event.preventDefault();
    let location = event.target.elements.location.value
    let category = event.target.elements.category.value
    let q = event.target.elements.search_term.value
    this.props.getBusinesses(q, location, category)
  }

  clearFilters=()=>{
    window.location.reload();
  }

  //Function to toggle visibility of a div message depending on whether businesses are found or not
  businessesNotFound=()=>{
    if(this.props.getBusinessesMessage.message === "No businesses found"){
      return "show"
    }
    else{
      return "collapse"
    }
  }

  //Function to toggle behaviour of the previous button for paginantion
  paginationPrev=(prevPage)=>{
    if(prevPage === undefined){
      return "collapse"
    }
    else if(prevPage === null){
      return "page-item disabled"
    }
    else{
      return "page-item"
    }
  }
  //Function to toggle behaviour of the next button for paginantion
  paginationNext=(nextPage)=>{
    if(nextPage === undefined){
      return "collapse"
    }
    else if(nextPage === null){
      return "page-item disabled"
    }
    else{
      return "page-item"
    }
  }

  //Function to toggle behaviour of the button showing total pages for paginantion
  paginationPages=(prevPage, nextPage)=>{
    if(nextPage === undefined && nextPage === undefined){
      return "collapse"
    }
    else{
      return "page-item disabled"
    }
  }

  render() {
    const businesses=Object.values({...this.props.getBusinessesMessage.Businesses});
    const prevPage = this.props.getBusinessesMessage.prevPage;
    const totalPages = this.props.getBusinessesMessage.totalPages;
    const currentPage = this.props.getBusinessesMessage.currentPage;
    const nextPage = this.props.getBusinessesMessage.nextPage;
    let paramsPrev = ["","", "", prevPage];
    let paramsNext = ["", "", "", nextPage];
    let nextClass = this.paginationNext(nextPage)
    let prevClass = this.paginationPrev(prevPage)
    let pagesClass = this.paginationPages(prevPage, nextPage)
    // let businessNotFound = this.businessesNotFound()
    let myprops = {businessNotFound: this.businessesNotFound, businesses: businesses}
    return (
      <div className="businessesList">
        <AuthNavigationBar/>
        <br/><br/>
        <div className="container">
          <h2>Businesses</h2>
          <hr/>
          <br/>
          <div className="row">
              <div className="col-2">
                <a href ="/register-business">
                  <button type="button" className="btn btn-info btn-sm" style={{paddingBottom: '11px'}}>Register Business</button>
                </a>
              </div>
              <SearchFilters onSubmit={this.filterBusinesses}/>
              <button onClick={this.clearFilters} type="submit" className="btn btn-danger mb-2" title='Clear filters'>Clear</button>
              <div style = {{width:'100%'}}>
              <br/><br/>
                <TableList myprops={myprops}/>
                <br/><br/>
                  <ul className="pagination justify-content-end" id="paginateSect">
                    <li className={prevClass} id="prev"><NavLink to={`/businesses?page=${prevPage}`} className="page-link"><span onClick={()=>this.props.getBusinesses(...paramsPrev)}>Previous</span></NavLink></li>
                    <li className={pagesClass}><a className="page-link">{currentPage} of {totalPages}</a></li>
                    <li className={nextClass} id="next"><NavLink to={`/businesses?page=${nextPage}`} className="page-link"><span onClick={()=>this.props.getBusinesses(...paramsNext)}>Next</span></NavLink></li>
                  </ul>
                <br/>
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

const mapStateToProps = (state) =>({
  getBusinessesMessage:state.getBusinesses.getBusinessesMessage,
  getBusinesses:PropTypes.func.isRequired
});

export default withRouter(connect(mapStateToProps,{getBusinesses})(BusinessesList));