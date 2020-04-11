import React, {Fragment}  from 'react';


const QuizQuestion = (props) => {

  if(!props.question) { return "Loading..." }

  return (
    <Fragment>
    <h4>
      {props.question.questionName}
    </h4>
    <p>Option A: {props.question.incorrectAnswers[0]}</p>
    <p>Option B: {props.question.incorrectAnswers[1]}</p>
    <p>Option C: {props.question.incorrectAnswers[2]}</p>
    <p>Option D-correct: {props.question.correctAnswer}</p>
    </Fragment>
  )
}

export default QuizQuestion;
