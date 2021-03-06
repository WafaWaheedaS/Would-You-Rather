export const GET_USERS = "GET_USERS";
export const GET_SELECTED_USER = "GET_SELECTED_USER";
export const GET_ANSWER = "GET_ANSWER";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

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

export function getAnswer(question, answer) {
  return {
    type: GET_ANSWER,
    question,
    answer
  };
}

export function saveUserAnswerAction({ id, authUser, answer }) {
  return {
    type: SAVE_USER_ANSWER,
    id,
    authUser,
    answer
  };
}
