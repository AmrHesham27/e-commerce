import { combineReducers } from 'redux'
import authUserReducer from './authUser';
import productsReducer from './products';
import shoppingDataReducer from './shoppingCart';
import seeDetailsReducer from './seeDetailsReducer';

// here you can see the design of your state
const reducers = combineReducers({
    authUser : authUserReducer,
    products : productsReducer,
    shoppingData : shoppingDataReducer,
    seeDetails : seeDetailsReducer,
});
export default reducers
