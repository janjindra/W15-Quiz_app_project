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
          questions: []
        }
      }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.createQuestion = this.createQuestion.bind(this);

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
  }

  createQuestion(question){
    const request = new Request();
    request.post('/api/questions', question)
    .then( (data) => {
      data.json()
      .then((result) => {
        this.state.quiz.questions.push(result)
      })
    })
  }


  render(){
    return(
      <div>
<br></br><br></br><br></br>
      <p> Give your Quiz a name and a number of questions to get started creating your own Quiz! </p>
      <p> Once created it will now be able to be selected from Quiz play area. </p>
<br></br><br></br>
      <h1> Create a quiz </h1>
      <hr></hr>
      <form onSubmit={this.handleSubmit}>
      <label>Enter Quiz Name:</label>
      <input type="text" placeholder= "Name" name="name" onChange={this.handleChange} value={this.state.quiz.name} /><br/>
    <label>Number Of Questions:</label>
      <input type="number" placeholder= "Number of Questions" name="numberOfQuestions" onChange={this.handleChange} value={this.state.quiz.numberOfQuestions} /><br/>
    <br></br>  <button type="submit">Save Quiz</button>
      </form>
      <div>
        {Array.from({ length: this.state.quiz.numberOfQuestions }, (value, index) => (
          <CreateQuestionForm key={index} questionNumber={index + 1} onCreate={this.createQuestion} quizInQuestion={true} />
        ))}
      </div>
      </div>
    )
  }

}

export default CreateQuizzesForm;
