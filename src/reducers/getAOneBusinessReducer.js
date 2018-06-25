import { GET_ONE_BUSINESS, DELETE_BUSINESS, ADD_REVIEW, GET_REVIEWS } from '../actions/types';

const initialState = {
    getBusinessMessage:{},
    deleteBusinessMessage: {},
    addReviewMessage: {},
    getReviewsMessage: {}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case GET_ONE_BUSINESS:
        console.log('Reducing business..');
            return {...state, 
                getBusinessMessage: action.payload}
        case DELETE_BUSINESS:
        console.log('Reducing business..');
            return {...state, 
                deleteBusinessMessage: action.payload}
        case ADD_REVIEW:
        console.log('Reducing business..');
            return {...state, 
                addReviewMessage: action.payload}
        case GET_REVIEWS:
        console.log('Reducing business..');
            return {...state, 
                getReviewsMessage: action.payload}
        default:
            return state;
    }
}