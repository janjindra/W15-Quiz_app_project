import React from 'react';

const QuizSelector = (props) => {
  const options = props.quizzes.map(quiz => {
    return <option value={quiz.name} key={quiz.id}>{quiz.name}</option>
  })

function handleChange(event){
  props.onQuizSelected(event.target.value)
}

function handleChangeCategory(event){
  props.onCategorySelected(event.target.value)
}

// <select id="category-selector" defaultValue="default" onChange={handleChangeCategory}>
//   <option disabled value="default">Choose a Category...</option>
//   <option value = "mythology">Mythology</option>
//   <option value = "sports">Sports</option>
//   <option value = "history">History</option>
//   <option value = "generalKnowledge">General Knowledge</option>
//   <option value = "animals">Animals</option>
//   <option value = "politics">Politics</option>
//   <option value = "art">Art</option>
//   <option value = "geography">Geography</option>
// </select>

  return (
    <div>

    <h4>Select a custom quiz</h4>
    <select id="quiz-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Quiz...</option>
      {options}
    </select>


    <br></br><br></br>
    <h4>Select a quiz by category</h4>
    <button onClick={handleChangeCategory} type="button" value="mythology">Mythology</button>
    <button onClick={handleChangeCategory} type="button" value="sports">Sports</button>
    <button onClick={handleChangeCategory} type="button" value="history">History</button>
    <button onClick={handleChangeCategory} type="button" value="generalKnowledge">General Knowledge</button>
    <button onClick={handleChangeCategory} type="button" value="animals">Animals</button>
    <button onClick={handleChangeCategory} type="button" value="politics">Politics</button>
    <button onClick={handleChangeCategory} type="button" value="art">Art</button>
    <button onClick={handleChangeCategory} type="button" value="geography">Geography</button>

    </div>


  )
}


export default QuizSelector;
