export const ADD_USER = 'ADD_USER';

export function addUserAction(email){
  return {
    type: ADD_USER,
    email
  }
}