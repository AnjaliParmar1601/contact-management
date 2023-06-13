import {  applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'; // (optional) for async actions
import rootReducer from "./redux/reducer"; // import your root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

