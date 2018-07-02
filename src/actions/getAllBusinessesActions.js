import { GET_ALL_BUSINESSES} from './types';

export const getBusinesses=(q="", location="", category="", page=1)=>dispatch => {
        const options = {
            method:'GET',
            headers:{
                'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
                'Content-Type':'application/json'}};
       fetch(`/api/v2/businesses?q=${q}&location=${location}&category=${category}&page=${page}`, options)
       .then (response => response.json())
       .then (data => {
           dispatch(
            {
            type: GET_ALL_BUSINESSES,
            payload: data
            })
        })
    
}
