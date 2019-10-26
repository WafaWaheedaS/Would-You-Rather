import { GET_USERS, GET_SELECTED_USER, GET_ANSWER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.users };
    case GET_SELECTED_USER:
      return { ...state, selectedUser: action.user };
    case GET_ANSWER:
      let current = { ...state, answers: { ...state.answers } };
      current.answers[action.question] = action.answer;
      return current;
    default:
      return state;
  }
}
