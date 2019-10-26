export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function addQuestionIdToUser(questionId, user) {
  return {
    type: ADD_QUESTION_TO_USER,
    id: questionId,
    author: user
  };
}

export function saveAnswerAction({ id, authUser, answer }) {
  return {
    type: SAVE_ANSWER,
    id,
    authUser,
    answer
  };
}
