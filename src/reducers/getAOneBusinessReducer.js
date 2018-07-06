import { GET_ONE_BUSINESS, DELETE_BUSINESS, EDIT_BUSINESS, ADD_REVIEW, GET_REVIEWS } from '../actions/types';

const initialState = {
    getBusinessMessage:{},
    deleteBusinessMessage: {},
    editBusinessMessage: {},
    addReviewMessage: {},
    getReviewsMessage: {}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case GET_ONE_BUSINESS:
            return {...state, 
                getBusinessMessage: action.payload}
        case DELETE_BUSINESS:
            return {...state, 
                deleteBusinessMessage: action.payload}
        case EDIT_BUSINESS:
            return {...state, 
                editBusinessMessage: action.payload}

        case ADD_REVIEW:
            return {...state, 
                addReviewMessage: action.payload}
        case GET_REVIEWS:
            return {...state, 
                getReviewsMessage: action.payload}
        default:
            return state;
    }
}