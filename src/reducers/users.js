import { GET_USERS, GET_SELECTED_USER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.users };
    case GET_SELECTED_USER:
      return { ...state, selectedUser: action.user };
    default:
      return state;
  }
}
