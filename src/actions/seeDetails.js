export const ADD_SEE_DETAILS = 'ADD_SEE_DETAILS';

export function addSeeDetailsAction( productName, productInfo ){
  return {
    type: ADD_SEE_DETAILS,
    productName,
    productInfo,
  }
}