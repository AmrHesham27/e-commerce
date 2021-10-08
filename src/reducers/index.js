import { combineReducers } from 'redux'
import authUserReducer from './authUser';
import productsReducer from './products';
import seeDetailsReducer from './seeDetailsReducer';

// here you can see the design of your state
const reducers = combineReducers({
    authUser : authUserReducer,
    products : productsReducer,
    seeDetails : seeDetailsReducer,
});
export default reducers
