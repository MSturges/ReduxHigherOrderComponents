import { combineReducers } from 'redux';
import Authentication from './reducer_authentication';

const rootReducer = combineReducers({

  authenticated: Authentication

});

export default rootReducer;
