import {GET_ONE_BUSINESS} from './types';

export const getBusiness=(bizId)=>dispatch => {
    console.log('Getting one Businesses...');

    const options = {
        method:'GET',
        headers:{
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
            'Content-Type':'application/json'}};
    fetch(`http://127.0.0.1:5000/api/v2/businesses/${bizId}`, options)
    .then (response => response.json())
    .then (data => dispatch(
    {
        type: GET_ONE_BUSINESS,
        payload: data
    }
    
    ))
    
}
