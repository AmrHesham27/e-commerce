export const ADD_SHOPPING_DATA = 'ADD_SHOPPING_DATA';

export function addShoppingDataAction(data){
  return {
    type: ADD_SHOPPING_DATA,
    data
  }
}