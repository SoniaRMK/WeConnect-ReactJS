import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers';

const middleWare = [thunk];
const Weconnect = createStore(mainReducer, applyMiddleware(...middleWare));

export default  Weconnect;

