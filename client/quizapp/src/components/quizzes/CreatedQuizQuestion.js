import React, {Fragment}  from 'react';

const CreatedQuizQuestion = (props) => {
  if(!props.quiz) { return "No created quiz selected." }


  const questions = props.quiz.questions.map((question, index) => {
 if (question.type === "boolean") {

//this is a true/false type of questions.
   return (
     <li key={index} className="component-item">
       <div className="component">
       <Fragment>
       <h1>
         {question.questionName}
       </h1>
       <p>Option A: {question.incorrectAnswers[0]}</p>
       <p>Option B-correct: {question.correctAnswer}</p>
       </Fragment>
       </div>
     </li>
   )

 }
 else {
//this is a multiple answer type of questions.
   return (

     <li key={index} className="component-item">
       <div className="component">
       <Fragment>
       <h1>
         {question.questionName}
       </h1>
       <p>Option A: {question.incorrectAnswers[0]}</p>
       <p>Option B: {question.incorrectAnswers[1]}</p>
       <p>Option C: {question.incorrectAnswers[2]}</p>
       <p>Option D-correct: {question.correctAnswer}</p>
       </Fragment>
       </div>
     </li>
   )

 }

  })

  return (
    <ul className="component-list">
      {questions}
    </ul>

  )
}

export default CreatedQuizQuestion;
