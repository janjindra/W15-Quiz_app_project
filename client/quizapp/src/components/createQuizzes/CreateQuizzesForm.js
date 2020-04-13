import React, {Component} from 'react';
import Request from '../../helpers/request';
import CreateQuestionForm from '../../components/createQuestions/CreateQuestionForm'


class CreateQuizzesForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        showQuestions: false,
        quiz: {
          name: "",
          numberOfQuestions: 0
        }

      }


   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event){
    let propertyName = event.target.name;
    let quiz = this.state.quiz
    quiz[propertyName] = event.target.value
    this.setState({quiz: quiz})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.quiz)
    this.props.onCreate(this.state.question)
  }


  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder= "name" name="name" onChange={this.handleChange} value={this.state.quiz.name} /><br></br>
      <input type="number" placeholder= "Number Of Questions" name="numberOfQuestions" onChange={this.handleChange} value={this.state.quiz.numberOfQuestions} /><br></br>
      <button type="submit">Save Quiz</button>
      </form>
      <div>
        {Array.from({ length: this.state.quiz.numberOfQuestions }, (value, index) => (
          <CreateQuestionForm key={index} questionNumber={index + 1} />
        ))}
      </div>
      </div>
    )
  }




}


export default CreateQuizzesForm;



// <div>
//     {Array.from({ length: numberOfQuestions }, (value, index) => (
//       <Questions key={index} questionNumber={index + 1} />
//     ))}
//   </div>
