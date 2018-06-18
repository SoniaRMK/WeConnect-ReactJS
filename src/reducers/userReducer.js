import { SIGN_USER, LOGIN_USER, RESET_PASSWORD } from '../actions/types';

const initialState = {
    signUpMessage:{},
    loggedInToken:{},
    resetPasswordMessage:{}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case SIGN_USER:
            return {...state, 
            signUpMessage: action.payload}
        case LOGIN_USER:
            console.log('reducer...')
            return {...state,
            loggedInToken: action.token}
        case RESET_PASSWORD:
            return {...state,
            resetPasswordMessage: action.payload}
        default:
            return state;
    }
}