import { combineReducers} from 'redux';
import userReducer from './userReducer';
import registerBusinessReducer from './registerBusinessReducer';
import getAllBusinessesReducer from './getAllBusinessesReducer';


const mainReducer = combineReducers({
    user: userReducer,
    registerBusiness: registerBusinessReducer,
    getBusinesses: getAllBusinessesReducer
});

export default mainReducer;