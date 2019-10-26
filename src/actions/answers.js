export const GET_ANSWERS = "GET_ANSWERS";

export function getAnswers(answers) {
  return {
    type: GET_ANSWERS,
    answers
  };
}
