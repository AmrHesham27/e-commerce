import { combineReducers } from 'redux'
import authUserReducer from './authUser';

// here you can see the design of your state
const reducers = combineReducers({
    authUser : authUserReducer,
});
export default reducers
