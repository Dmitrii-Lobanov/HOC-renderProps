import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [
        ...state,
        action.payload
      ];
    case FETCH_COMMENTS:
      const comments = action.payload.data
      return [
        ...state,
        ...comments
      ]
    default:
      return state;
  }
}