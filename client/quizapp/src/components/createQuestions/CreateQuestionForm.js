import React, {Component} from 'react';
import Request from '../../helpers/request';

class CreateQuestionForm extends Component{
  constructor(props){
      super(props);
      this.state = {
        heldQuizzes: [],
        incorrect1: "",
        incorrect2: "",
        incorrect3: "",
        quiz: "",
        multi: false,
        trueorfalse: false,
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
      this.handleIncorrect1Change = this.handleIncorrect1Change.bind(this);
      this.handleIncorrect2Change = this.handleIncorrect2Change.bind(this);
      this.handleIncorrect3Change = this.handleIncorrect3Change.bind(this);
      this.TrueOrFalseReturn = this.TrueOrFalseReturn.bind(this);
      this.MultipleChoiceReturn = this.MultipleChoiceReturn.bind(this);
      this.TypeChoiceReturn = this.TypeChoiceReturn.bind(this);
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
    if(this.state.question.type == "Multiple-choice"){
      this.state.multi = true
    }
    if(this.state.question.type == "True/False"){
      this.state.trueorfalse = true
    }
  }

  handleIncorrect1Change(event){
    this.setState({
      incorrect1: event.target.value
    });
  }

  handleIncorrect2Change(event){
    this.setState({
      incorrect2: event.target.value
    });
 }

  handleIncorrect3Change(event){
    this.setState({
      incorrect3: event.target.value
    });
  }

  handleQuizzes(event){
    const index = parseInt(event.target.value)
    const selectedQuiz = this.state.heldQuizzes[index]
    let quiz = this.state.quiz
    quiz = selectedQuiz
    this.setState({quiz: quiz})
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.multi){
      this.state.question.incorrectAnswers.push(this.state.incorrect1)
      this.state.question.incorrectAnswers.push(this.state.incorrect2)
      this.state.question.incorrectAnswers.push(this.state.incorrect3)
    } else if
     (this.state.trueorfalse){
       this.state.question.incorrectAnswers.push(this.state.incorrect1)
     }
    this.state.question.quizzes.push(this.state.quiz)
    this.props.onCreate(this.state.question)
    this.setState({
      incorrect1: "",
      incorrect2: "",
      incorrect3: "",
      multi: false,
      trueorfalse: false,
      quiz: "",
      question: {
        category: "",
        type: "",
        difficulty: "",
        questionName: "",
        correctAnswer: "",
        incorrectAnswers: [],
        quizzes: []
      }})
}

    TrueOrFalseReturn(){
      return(
        <div>
      <label>Enter the incorrect answer:</label>
      <input type="text" placeholder="incorrectAnswers" name="incorrectAnswers" onChange={this.handleIncorrect1Change} value={this.state.incorrect1}/>
      </div>
    )
    }

    MultipleChoiceReturn() {
      return(
        <div>
      <label>Enter the incorrect answers:</label>;
      <input type="text" placeholder="incorrectAnswers" name="incorrectAnswers" onChange={this.handleIncorrect1Change} value={this.state.incorrect1}/>
      <input type="text" placeholder="incorrectAnswers" name="incorrectAnswers" onChange={this.handleIncorrect2Change} value={this.state.incorrect2}/>
      <input type="text" placeholder="incorrectAnswers" name="incorrectAnswers" onChange={this.handleIncorrect3Change} value={this.state.incorrect3}/>
      <br/>
    </div>
    )
    }

    TypeChoiceReturn() {
      const istrueorfalse = this.state.trueorfalse;
      const ismultiplechoice = this.state.multi;
  if (istrueorfalse) {
    return this.TrueOrFalseReturn()
  } else if
    (ismultiplechoice) {
    return this.MultipleChoiceReturn()
  }

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

    <label>Choose a category:</label>
    <select name="category" onChange={this.handleChange} defaultValue="select-category">
        <option disabled value="select-category">Select a category</option>
        <option value="General-Knowledge" >General-Knowledge</option>
        <option value="Mythology" >Mythology</option>
        <option value="Sports" >Sports</option>
        <option value="Geography" >Geography</option>
        <option value="History" >History</option>
        <option value="Politics">Politics</option>
        <option value="Art" >Art</option>
        <option value="Celebrities" >Celebrities</option>
        <option value="Animals" >Animals</option>
        <option value="Vehicles" >Vehicles</option>
        <option value="Entertainment: Music" >Entertainment: Music</option>
        <option value="Science: Mathematics" >Science: Mathematics</option>
        </select> <br/>

    <label>Choose a type:</label>
    <select name="type" onChange={this.handleChange} defaultValue="select-type">
        <option disabled value="select-type">Select a type</option>
        <option value="Multiple-choice" >Multiple Choice</option>
        <option value="True/False" >True Or False</option>
        </select> <br/>

    <label>Choose a difficulty:</label>
    <select name="difficulty" onChange={this.handleChange} defaultValue="select-difficulty">
        <option disabled value="select-difficulty">Select a difficulty</option>
        <option value="Easy" >Easy</option>
        <option value="Medium" >Medium</option>
        <option value="Hard" >Hard</option>
        </select> <br/>

    <label>Enter your question:</label>
    <input type="text" placeholder="questionName" name="questionName" onChange={this.handleChange} value={this.state.question.questionName}/><br/>

    <label>Enter the correct answer:</label>
    <input type="text" placeholder="correctAnswer" name="correctAnswer" onChange={this.handleChange} value={this.state.question.correctAnswer}/><br/>


    {this.TypeChoiceReturn()}

    <label>Choose a quiz to assign your quesiton to:</label>
    <select name="quiz" onChange={this.handleQuizzes} defaultValue="select-quiz">
        <option disabled value ='select-quiz'>Select a Quiz</option>
        {quizOptions}
        </select> <br/>

        <button type="submit">Add Question!</button>
    </form>
    </div>
    )
  }
}
export default CreateQuestionForm;
