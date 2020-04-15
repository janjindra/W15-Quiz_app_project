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
    <div><br></br><br></br>
    <p> At <b>JPP Quizzes</b> you have the opportunity to contribute to our amazing collection of questions!</p>
    <p> Whether you're looking to add a bit of General Knowledge or show off your intelligence in Mythology, all questions are welcome! </p>


    <CreateQuestionForm onCreate={this.handlePost}/>
    </div>
    )
  }
}
export default CreateQuestionContainer;
