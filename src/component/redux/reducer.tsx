import { combineReducers } from 'redux';
import CrudReducers from './CrudReducers';

const rootReducer = combineReducers({
  counter: CrudReducers,
  // Add more reducers here if needed
});

export default rootReducer;