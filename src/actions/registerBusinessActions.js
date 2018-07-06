import { REGISTER_BUSINESS} from './types';

export const registerBusiness=(registerBusinessData)=>dispatch => {
    if (registerBusinessData){

        const options = {
            method:'POST',
            body:registerBusinessData, 
            headers:{
                'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
                'Content-Type':'application/json'}};
       fetch(`/api/v2/businesses`, options)
       .then (response => response.json())
       .then (data => dispatch(
        {
            type: REGISTER_BUSINESS,
            payload: data
        }
    
    ))
    
    }
}
