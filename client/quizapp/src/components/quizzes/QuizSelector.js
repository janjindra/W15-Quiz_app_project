import React from 'react';
import CreatedQuizQuestion from './CreatedQuizQuestion';

const QuizSelector = (props) => {
  const options = props.quizzes.map(quiz => {
    return <option value={quiz.name} key={quiz.id}>{quiz.name}</option>
  })

function handleChange(event){
  props.onQuizSelected(event.target.value)
}




  return (
    <div>
    <select id="quiz-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Quiz...</option>
      {options}
    </select>


    </div>


  )
}

export default QuizSelector;
