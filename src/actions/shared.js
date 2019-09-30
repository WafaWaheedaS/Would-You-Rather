import * as WYRApi from "../assets/_DATA";
import { getQuestions } from "../actions/questions";

export function handleGetQuestions() {
  return dispatch => {
    return WYRApi._getQuestions().then(e => dispatch(getQuestions(e)));
  };
}
