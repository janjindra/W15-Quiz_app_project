import React, {Fragment}  from 'react';


const CreatedQuizQuestion = (props) => {

  if(!props.quiz) { return "No created quiz selected." }


  return (
    <Fragment>
    <h4>
      {props.quiz.questions[0].questionName}
    </h4>
    <p>Option A: {props.quiz.questions[0].incorrectAnswers[0]}</p>
    <p>Option B: {props.quiz.questions[0].incorrectAnswers[1]}</p>
    <p>Option C: {props.quiz.questions[0].incorrectAnswers[2]}</p>
    <p>Option D-correct: {props.quiz.questions[0].correctAnswer}</p>
    </Fragment>
  )
}

export default CreatedQuizQuestion;
