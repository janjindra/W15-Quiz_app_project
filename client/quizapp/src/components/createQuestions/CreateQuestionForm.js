import React, {Component} from 'react';
import Request from '../../helpers/request';

class CreateQuestionForm extends Component{
  constructor(props){
      super(props);
      this.state = {
        heldQuizzes: [],
        question: {
          category: "",
          type: "",
          difficulty: "",
          questionName: "",
          correctAnswer: "",
          incorrectAnswers: [],
          quizzes: []
        }
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleQuizzes = this.handleQuizzes.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/quizzes')
    .then((data) => {
      this.setState({heldQuizzes: data})
    })
  }

  handleChange(event){
    let propertyName = event.target.name;
    let question = this.state.question;
    question[propertyName] = event.target.value;
    this.setState({ question: question})
  }

  handleQuizzes(event){
    const index = parseInt(event.target.value)
    const selectedQuiz = this.state.heldQuizzes[index]
    let question = this.state.question
    question['quizzes'] = selectedQuiz
    this.setState({question: question})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.question)
  }

  render(){
    if(this.state.quizzes === 0){
    return <p> Loading... </p>
  }

  const quizOptions = this.state.heldQuizzes.map((quiz, index) => {
    return <option key={index} value={index}>{quiz.name}</option>
  })
  
  return(

    <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="category" name="category" onChange={this.handleChange} value={this.state.question.category}/>
    <input type="text" placeholder="type" name="type" onChange={this.handleChange} value={this.state.question.type}/>
    <input type="text" placeholder="difficulty" name="difficulty" onChange={this.handleChange} value={this.state.question.difficulty}/>
    <input type="text" placeholder="questionName" name="questionName" onChange={this.handleChange} value={this.state.question.questionName}/>
    <input type="text" placeholder="correctAnswer" name="correctAnswer" onChange={this.handleChange} value={this.state.question.correctAnswer}/>
    <input type="text" placeholder="incorrectAnswers" name="incorrectAnswers" onChange={this.handleChange} value={this.state.question.incorrectAnswers}/>
    <input type="text" placeholder="incorrectAnswers1" name="incorrectAnswers" onChange={this.handleChange} value={this.state.question.incorrectAnswers}/>
    <input type="text" placeholder="incorrectAnswers2" name="incorrectAnswers" onChange={this.handleChange} value={this.state.question.incorrectAnswers}/>
    <select name="quiz" onChange={this.handleQuizzes} defaultValue="select-quiz">
        <option disabled value ='select-quiz'>Select a Quiz</option>
        {quizOptions}
        </select>
        <button type="submit">Save</button>
    </form>
    </div>
    )
  }
}

export default CreateQuestionForm;
