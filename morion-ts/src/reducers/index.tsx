import { GET_DATE } from '../actions/types';

export const reducer = (state: any, action: any) => {
  switch(action.type) {
    case GET_DATE:
      return {
        ...state,
        date: action.payload
      }
    default:
      return state;
  }
}