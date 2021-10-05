import { ADD_DATA } from "../actions/products";

// state if never defined before will be null 
// if default and the state is defined it will return this defined state not null
export default function productsReducer( state=null , action){
    switch (action.type){
        case ADD_DATA:
            return action.value
        default :
            return state
    }
}