import { combineReducers } from 'redux'
import authUserReducer from './authUser';
import productsReducer from './products';

// here you can see the design of your state
const reducers = combineReducers({
    authUser : authUserReducer,
    products : productsReducer,
});
export default reducers
