export const GET_USERS = "GET_USERS";
export const GET_SELECTED_USER = "GET_SELECTED_USER";
export const GET_ANSWER = "GET_ANSWER";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function getSelectedUser(user) {
  return {
    type: GET_SELECTED_USER,
    user
  };
}

export function getAnswer(answer) {
  return {
    type: GET_ANSWER,
    answer
  };
}
