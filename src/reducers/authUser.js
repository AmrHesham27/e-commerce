import { ADD_USER } from "../actions/authUser";

// state if never defined before will be null 
// if default and the state is defined it will return this defined state not null
export default function authUserReducer( state=null , action){
    switch (action.type){
        case ADD_USER:
            return action.email
        default :
            return state
    }
}