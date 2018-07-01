import { combineReducers} from 'redux';
import userReducer from './userReducer';
import registerBusinessReducer from './registerBusinessReducer';
import getAllBusinessesReducer from './getAllBusinessesReducer';
import getAOneBusinessReducer from './getAOneBusinessReducer';


const mainReducer = combineReducers({
    user: userReducer,
    registerBusiness: registerBusinessReducer,
    getBusinesses: getAllBusinessesReducer,
    getBusiness: getAOneBusinessReducer
});

export default mainReducer;