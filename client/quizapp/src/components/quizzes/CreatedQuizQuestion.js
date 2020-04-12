import React, {Component, Fragment} from 'react';
import isEmpty from '../../helpers/is-empty';
import M from 'materialize-css';

class CreatedQuizQuestion extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0
    }
    this.handleOptionClick = this.handleOptionClick.bind(this);
  };


  static getDerivedStateFromProps(props, state){

         if(props.quiz  ){
             return{
                 questions: props.quiz.questions,
                 currentQuestion: props.quiz.questions[state.currentQuestionIndex],
                 nextQuestion: props.quiz.questions[state.currentQuestionIndex+1],
                 previousQuestion: props.quiz.questions[state.currentQuestionIndex-1],
                 answer: props.quiz.questions[state.currentQuestionIndex].correctAnswer
             }
         }
         return null;
     }

  componentDidMount(){

      if(this.props.quiz){
        this.getDerivedStateFromProps(this.props, this.state);
    }
  }

  handleOptionClick(event){
    if (event.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
      this.correctAnswer();
    } else {
        this.wrongAnswer();
      }
    }


  correctAnswer(){
    M.toast({
      html: 'Correct Answer!',
      classes: 'toast-valid',
      displayLength: 1500
    });
    this.setState(prevState => ({
      score: prevState.score +1,
      correctAnswers: prevState.correctAnswers+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
    }))
  }

  wrongAnswer(){
    M.toast({
      html: 'Wrong Answer...',
      classes: 'toast-invalid',
      displayLength: 1500
    });
    this.setState(prevState => ({
      wrongAnswers: prevState.wrongAnswers+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
    }))
  }


  render(){
    if(!this.props.quiz) { return "No created quiz selected." }


    const questions = this.props.quiz.questions.map((question, index) => {
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


    const {currentQuestion} = this.state;

    return (


      <div>

      <h4>{currentQuestion.questionName}</h4>
      <p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[0]}</p>
      <p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[1]}</p>
      <p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[2]}</p>
      <p onClick={this.handleOptionClick}>{currentQuestion.correctAnswer}</p>

      <ul className="component-list">



      </ul>
      </div>
// {questions}
    )
  }

}


//     this.displayQuestions(this.state.questions, this.state.currentQuestion,
//       this.state.nextQuestion, this.state.previousQuestion);
// }


//   displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
//     let currentQuestionIndex = this.state.currentQuestionIndex;
//     if (!isEmpty(this.state.questions)){
//       questions = this.state.questions;
//       currentQuestion = questions[currentQuestionIndex];
//       nextQuestion = questions[currentQuestionIndex +1];
//       previousQuestion = questions[currentQuestionIndex - 1];
//       const answer = currentQuestion.correctAnswer;
//       this.setState({
//         currentQuestion: currentQuestion,
//         nextQuestion: nextQuestion,
//         previousQuestion: previousQuestion,
//         answer: answer
//       }
//     );
//   };
// }

export default CreatedQuizQuestion;
