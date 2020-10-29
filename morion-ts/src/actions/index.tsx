import { GET_DATE } from "./types";

export const getDate = (date: any) => {
  return {
    type: GET_DATE,
    payload: date
  }
}