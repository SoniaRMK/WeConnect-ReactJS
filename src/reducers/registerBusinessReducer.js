import { REGISTER_BUSINESS } from '../actions/types';

const initialState = {
    registerBusinessMessage:{}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case REGISTER_BUSINESS:
        console.log('Reducing business..');
            return {...state, 
                registerBusinessMessage: action.payload}
        default:
            return state;
    }
}