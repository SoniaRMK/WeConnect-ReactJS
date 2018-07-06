import {GET_ONE_BUSINESS, DELETE_BUSINESS, EDIT_BUSINESS, ADD_REVIEW, GET_REVIEWS} from './types';

export const getBusiness=(bizId)=>dispatch => {

    const options = {
        method:'GET',
        headers:{
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
            'Content-Type':'application/json'}};
    fetch(`/api/v2/businesses/${bizId}`, options)
    .then (response => response.json())
    .then (data => dispatch(
    {
        type: GET_ONE_BUSINESS,
        payload: data
    }
    
    ))
    
}

export const deleteBusiness=(bizId)=>dispatch => {

    const options = {
        method:'DELETE',
        headers:{
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
            'Content-Type':'application/json'}};
    fetch(`/api/v2/businesses/${bizId}`, options)
    .then (response => response.json())
    .then (data => {
        dispatch(
            {
                type: DELETE_BUSINESS,
                payload: data,
                id: bizId
            }
        );
    })
    
}

export const addReview=(bizId, reviewData)=>dispatch => {

    const options = {
        method:'POST',
        body:reviewData,
        headers:{
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
            'Content-Type':'application/json'}};
    fetch(`/api/v2/businesses/${bizId}/reviews`, options)
    .then (response => response.json())
    .then (data => {
        dispatch(
            {
                type: ADD_REVIEW,
                payload: data
            }
        );
    })
    
}

export const editBusiness=(bizId, businessData)=>dispatch => {

    const options = {
        method:'PUT',
        body:businessData,
        headers:{
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
            'Content-Type':'application/json'}};
    fetch(`/api/v2/businesses/${bizId}`, options)
    .then (response => response.json())
    .then (data => {
        dispatch(
            {
                type: EDIT_BUSINESS,
                payload: data
            }
        );
    })
    
}

export const getReviews=(bizId)=>dispatch => {

    const options = {
        method:'GET',
        headers:{
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
            'Content-Type':'application/json'}};
    fetch(`/api/v2/businesses/${bizId}/reviews`, options)
    .then (response => response.json())
    .then (data => {
        dispatch(
            {
                type: GET_REVIEWS,
                payload: data,
                id: bizId
            }
        );
    })
    
}
