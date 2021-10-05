export const ADD_SEE_DETAILS = 'ADD_SEE_DETAILS';

export function addSeeDetailsAction( productType, productName ){
  return {
    type: ADD_SEE_DETAILS,
    productName,
    productType
  }
}