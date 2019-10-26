import * as WYRApi from "../assets/_DATA";
import { getUsers, getSelectedUser } from "../actions/users";
import { getQuestions } from "../actions/questions";

export function handleGetUsers() {
  return dispatch => {
    return WYRApi._getUsers().then(e => {
      dispatch(getUsers(e));
      dispatch(getSelectedUser("sarahedo"));
    });
  };
}

export function handleGetQuestions() {
  return dispatch => {
    return WYRApi._getQuestions().then(e => dispatch(getQuestions(e)));
  };
}

export function submitAnswerToQuestions(authedUser, qid, answer) {
  return dispatch => {
    return WYRApi._saveQuestionAnswer({ authedUser, qid, answer }).then(e =>
      dispatch(getQuestions(e))
    );
  };
}
