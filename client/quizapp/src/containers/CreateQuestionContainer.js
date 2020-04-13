import React, {Component} from 'react';
import CreateQuestionForm from '../components/createQuestions/CreateQuestionForm';
import Request from '../helpers/request';


class CreateQuestionContainer extends Component{

  handlePost(question){
    const request = new Request();
    request.post('/api/questions', question)
    .then( () => {
      window.loaction = '/createQuestions'
    })
  }

  render(){

    return (
      <CreateQuestionForm onCreate={this.handlePost}/>
    )
  }
}
export default CreateQuestionContainer;
