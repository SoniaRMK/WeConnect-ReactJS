import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWare = [thunk];
const Weconnect = createStore(rootReducer, applyMiddleware(...middleWare));

export default  Weconnect;

