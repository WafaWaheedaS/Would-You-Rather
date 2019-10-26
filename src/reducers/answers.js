import { GET_ANSWERS } from "../actions/answers";

export default function answers(state = {}, action) {
  switch (action.type) {
    case GET_ANSWERS:
      return { ...state, ...action.answers };
    default:
      return state;
  }
}
