import { GET_ONE_BUSINESS } from '../actions/types';

const initialState = {
    getBusinessMessage:{}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case GET_ONE_BUSINESS:
        console.log('Reducing business..');
            return {...state, 
                getBusinessMessage: action.payload}
        default:
            return state;
    }
}