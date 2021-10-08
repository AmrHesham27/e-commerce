import { ADD_SEE_DETAILS } from "../actions/seeDetails";

// state if never defined before will be null 
// if default and the state is defined it will return this defined state not null
export default function seeDetailsReducer( state=null , action){
    switch (action.type){
        case ADD_SEE_DETAILS :
            return ( {productName : action.productName, productInfo : action.productInfo} );
        default :
            return state
    }
}