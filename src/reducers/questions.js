import { GET_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case SAVE_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]:
            action.hasAnswered === true
              ? {
                  ...state[action.id][action.answer],
                  votes: state[action.id][action.answer].votes.filter(
                    uid => uid !== action.authUser
                  )
                }
              : {
                  ...state[action.id][action.answer],
                  votes: state[action.id][action.answer].votes.concat([
                    action.authUser
                  ])
                }
        }
      };
    default:
      return state;
  }
}
