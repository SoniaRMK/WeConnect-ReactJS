import { combineReducers} from 'redux';
import userReducer from './userReducer';
// import businessReducer from './businessReducer';

const mainReducer = combineReducers({
    user: userReducer,
    // business: businessReducer
});

export default mainReducer;