import { GET_ALL_BUSINESSES } from '../actions/types';

const initialState = {
    getBusinessesMessage:{}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_BUSINESSES:
            return {...state, 
                getBusinessesMessage: action.payload}
        default:
            return state;
    }
}