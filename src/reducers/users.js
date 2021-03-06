import {
  GET_USERS,
  GET_SELECTED_USER,
  GET_ANSWER,
  SAVE_USER_ANSWER
} from "../actions/users";
import { ADD_QUESTION } from "../actions/questions";

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
    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[action.authUser].answers,
            [action.id]: action.answer
          }
        }
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions,
            action.question.id
          ]
        }
      };
    default:
      return state;
  }
}
