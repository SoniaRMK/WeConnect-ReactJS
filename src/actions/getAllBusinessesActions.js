import { GET_ALL_BUSINESSES} from './types';

export const getBusinesses=()=>dispatch => {
    console.log('Getting all Businesses...');

        const options = {
            method:'GET',
            headers:{
                'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
                'Content-Type':'application/json'}};
       fetch(`http://127.0.0.1:5000/api/v2/businesses`, options)
       .then (response => response.json())
       .then (data => dispatch(
        {
            type: GET_ALL_BUSINESSES,
            payload: data
        }
    
    ))
    
}
