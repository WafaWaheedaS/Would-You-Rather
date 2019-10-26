import * as WYRApi from "../assets/_DATA";
import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";

export function handleGetUsers() {
  return dispatch => {
    return WYRApi._getUsers().then(e => dispatch(getUsers(e)));
  };
}

export function handleGetQuestions() {
  return dispatch => {
    return WYRApi._getQuestions().then(e => dispatch(getQuestions(e)));
  };
}
