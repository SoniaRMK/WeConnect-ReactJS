import { REGISTER_BUSINESS} from './types';

export const registerBusiness=(registerBusinessData)=>dispatch => {
    console.log('Registering Business...');
    console.log('Bearer ' + sessionStorage.getItem('access_token'));
    if (registerBusinessData){

        const options = {
            method:'POST',
            body:registerBusinessData, 
            headers:{
                'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
                'Content-Type':'application/json'}};
       fetch(`http://127.0.0.1:5000/api/v2/businesses`, options)
       .then (response => response.json())
       .then (data => dispatch(
        {
            type: REGISTER_BUSINESS,
            payload: data
        }
    
    ))
    
    }
}