import { combineReducers } from "redux";
import questions from "./questions";
import answers from "./answers";
import users from "./users";

export default combineReducers({
  questions,
  answers,
  users
});
