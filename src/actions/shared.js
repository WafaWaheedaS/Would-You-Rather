import * as WYRApi from "../assets/_DATA";
import { getUsers, getSelectedUser } from "../actions/users";
import {
  getQuestions,
  addQuestion,
  addQuestionIdToUser
} from "../actions/questions";

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

export function saveQuestion(optionOne, optionTwo, selectedUser) {
  return dispatch => {
    return WYRApi._saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: selectedUser
    }).then(question => {
      dispatch(addQuestion(question));
      dispatch(addQuestionIdToUser(question.id, selectedUser));
    });
  };
}
