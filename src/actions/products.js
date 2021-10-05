export const ADD_DATA = 'ADD_DATA';

export function addDataAction(value){
  return {
    type: ADD_DATA,
    value
  }
}