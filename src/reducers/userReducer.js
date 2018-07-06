import { SIGN_USER, LOGIN_USER, LOGOUT_USER, RESET_PASSWORD } from '../actions/types';

const initialState = {
    signUpMessage:{},
    loggedInToken:{},
    loggedOutMessage: {},
    resetPasswordMessage:{}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case SIGN_USER:
            return {...state, 
            signUpMessage: action.payload}
        case LOGIN_USER:
            return {...state,
            loggedInToken: action.token}
        case LOGOUT_USER:
            return {...state, 
            loggedOutMessage: action.payload}
        case RESET_PASSWORD:
            return {...state,
            resetPasswordMessage: action.payload}
        default:
            return state;
    }
}