import * as WYRApi from "../assets/_DATA";
import {
  getUsers,
  getSelectedUser,
  saveUserAnswerAction
} from "../actions/users";
import {
  getQuestions,
  addQuestion,
  addQuestionIdToUser,
  saveAnswerAction
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

export function submitAnswerToQuestions({ id, selectedUser, answer }) {
  console.log(id, selectedUser, answer);
  return dispatch => {
    return WYRApi._saveQuestionAnswer({
      authedUser: selectedUser,
      qid: id,
      answer: answer
    }).then(() => {
      dispatch(
        saveAnswerAction({ id: id, authUser: selectedUser, answer: answer })
      );
      dispatch(
        saveUserAnswerAction({ id: id, authUser: selectedUser, answer: answer })
      );
    });
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
