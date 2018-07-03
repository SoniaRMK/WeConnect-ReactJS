import { SIGN_USER, LOGIN_USER, LOGOUT_USER, RESET_PASSWORD } from './types';

export const signUp=(signUPData)=>dispatch => {
    console.log('Signing Up...');
    if (signUPData){

        const options = {
            method:'POST',
            body:signUPData, 
            headers:{
                'Content-Type':'application/json'}};
       fetch(`/api/v2/auth/register`,options)
       .then (response => response.json())
       .then (data=> {
           dispatch(
            {
                type: SIGN_USER,
                payload: data
            })
        })    
    }
}

export const logIn=(loginData)=>dispatch => {
    if (loginData){

        const options = {
            method:'POST',
            body:loginData, 
            headers:{
                'Content-Type':'application/json'}
        };
        
       fetch(`/api/v2/auth/login`,options)
       .then (response => response.json())
       .then (data => {
            dispatch({
                    type: LOGIN_USER,
                    token: data
            })
        })
    
    }
}

export const logOut=()=>dispatch => {
        console.log('logging Out...');
        const options = {
            method:'POST', 
            headers:{
                'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
                'Content-Type':'application/json'}};
        fetch(`/api/v2/auth/logout`,options)
       .then (data=> dispatch(
        {
            type: LOGOUT_USER,
            payload: data
        }
    
    ))
    
}


export const resetPassword=(resetPasswordData)=>dispatch => {
    if (resetPasswordData){

        const options = {
            method:'POST',
            body:resetPasswordData, 
            headers:{
                'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
                'Content-Type':'application/json'}};
       fetch(`/api/v2/auth/reset-password`,options)
       .then (response => response.json())
       .then (data=> dispatch(
        {
            type: RESET_PASSWORD,
            payload: data
        }
    ))
    
    }
}