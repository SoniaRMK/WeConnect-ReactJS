import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Categories from './categories';
import Locations from './locations';



/**
 * SearchFilters Component where a logged in user can search for businesses.
 * 
 * ```html
 * <SearchFilters />
 * ```
 */
const SearchFilters =(props)=> {

        return (
            <form className="form-inline" onSubmit={props.onSubmit}>
                <Categories/>
                <Locations/>
                <input type="text" className="form-control mb-2 mr-sm-2" name="search_term" placeholder="Enter search term"/>    
                <button type="submit" className="btn btn-info mb-2">Search</button> &nbsp;
            </form>
        );
    }


export default SearchFilters;