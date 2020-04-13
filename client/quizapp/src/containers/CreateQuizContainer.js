import React, { Component} from 'react'
import Request from '../helpers/request'
import CreateQuizzesForm from '../components/createQuizzes/CreateQuizzesForm'
import CreateQuestionForm from '../components/createQuestions/CreateQuestionForm'

class CreateQuizContainer extends Component{


  handlePost(quiz){
    const request = new Request();
    request.post('/api/quizzes', quiz)
    .then( () => {
      window.location = '/createQuizzes'
    })
  }

  render(){

    return(
      <CreateQuizzesForm onCreate={this.handlePost}/>
    )
  }
}

export default CreateQuizContainer;
