import { ADD_SHOPPING_DATA } from "../actions/shoppingCart";

// state if never defined before will be null 
// if default and the state is defined it will return this defined state not null
export default function shoppingDataReducer( state=null , action){
    switch (action.type){
        case ADD_SHOPPING_DATA:
            return action.data
        default :
            return state
    }
}