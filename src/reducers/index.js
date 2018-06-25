import { combineReducers} from 'redux';
import userReducer from './userReducer';
import registerBusinessReducer from './registerBusinessReducer';
import getAllBusinessesReducer from './getAllBusinessesReducer';
import getAOneBusinessReducer from './getAOneBusinessReducer';
import { LOGOUT_USER } from '../actions/types';


const mainReducer = combineReducers({
    user: userReducer,
    registerBusiness: registerBusinessReducer,
    getBusinesses: getAllBusinessesReducer,
    getBusiness: getAOneBusinessReducer
});

const rootReducer = ( state, action ) => {
    if ( action.type === LOGOUT_USER ) {
      state = undefined;
    }
        
    return mainReducer(state, action)
  }

export default rootReducer;