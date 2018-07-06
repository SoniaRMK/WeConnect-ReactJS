import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavLink } from 'react-router-dom';



/**
 * TableList Component where a logged in user can view for businesses.
 * 
 * ```html
 * <TableList />
 * ```
 */
const TableList =(props)=> {
        let businesses = props.myprops.businesses;
        let businessNotFound = props.myprops.businessNotFound();
        return (
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th>Business Name</th>
                    <th>Category</th>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                <tr className={businessNotFound} id="noBusinesses"><th style = {{textAlign: 'center', fontWeight: 'bold', fontSize: '1.5em', color: 'red'}}>No Businesses found</th></tr>
                {businesses.map((business, index) =>(
                    <tr key={business['id']}>
                    <td><NavLink to={`/businesses/${business.id}`} style={{textDecoration: 'None'}}> {business['BusinessName']}</NavLink></td>
                    <td> {business['Category']}</td>
                    <td> {business['Location']}</td>
                    </tr>)
                )}
                </tbody>
            </table>
        );
    }

export default TableList;