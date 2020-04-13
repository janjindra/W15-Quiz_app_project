import React, {Component, Fragment} from 'react';
import isEmpty from '../../helpers/is-empty';
import ResultSummary from '../results/ResultSummary';


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
      wrongAnswers: 0,
      latestUser: {},

    }

    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
    // this.endGame = this.endGame.bind(this);
    // this.handleFinish = this.handleFinish.bind(this);


  };


  static getDerivedStateFromProps(props, state){

    if(props.quiz) {
      if (!isEmpty(state.nextQuestion)){

        return {

          questions: props.quiz.questions,
          numberOfQuestions: props.quiz.questions.length,
          currentQuestion: props.quiz.questions[state.currentQuestionIndex],
          nextQuestion: props.quiz.questions[state.currentQuestionIndex+1],
          previousQuestion: props.quiz.questions[state.currentQuestionIndex-1],
          answer: props.quiz.questions[state.currentQuestionIndex].correctAnswer,
          latestUser: props.users[props.users.length-1]
        }
      }
      else {
        if (isEmpty(state.nextQuestion)){
          // window.alert("The quiz has ended");
          // window.location = '/quizzes/results';

          return null;

        }
      }
    }
    else {
      return null;
    }
  }

  componentDidMount(){

    if(this.props.quiz){
      this.getDerivedStateFromProps(this.props, this.state);

  }
}


//the function sortList sorts/randomizes the 4 options for each question.
 sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("id01");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}



  handleOptionClick(event){
    if (event.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
      this.sortList();
      this.correctAnswer();


    } else {
      this.sortList();
      this.wrongAnswer();


    }
  }


  handleNextButtonClick(){
    if (this.state.nextQuestion !== undefined){
      this.setState(prevState=>({
        currentQuestionIndex: prevState.currentQuestionIndex+1
      }))
    }
  }

  handlePreviousButtonClick(){
    if (this.state.previousQuestion !== undefined){
      this.setState(prevState=>({
        currentQuestionIndex: prevState.currentQuestionIndex-1
      }))
    }
  }

  handleQuitButtonClick(){
    if(window.confirm("Are you sure you want to quit?")){
      window.location = '/quizzes';
    }
  }


  correctAnswer(){
    // M.toast({
    //   html: 'Correct Answer!',
    //   classes: 'toast-valid',
    //   displayLength: 1500
    // });
    this.setState(prevState => ({
      score: prevState.score +1,
      correctAnswers: prevState.correctAnswers+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
    }));
  }

  wrongAnswer(){
    // M.toast({
    //   html: 'Wrong Answer...',
    //   classes: 'toast-invalid',
    //   displayLength: 1500
    // });
    this.setState(prevState => ({
      wrongAnswers: prevState.wrongAnswers+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
    }));
  }


// endGame() {
//   alert('Quiz has ended!');
//   const {state} = this;
//   const playerStats = {
//     score: state.score,
//     numberOfQuestions: state.numberOfQuestions,
//     numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
//     correctAnswers: state.correctAnswers,
//     wrongAnswers: state.wrongAnswers
//   }
//   console.log(playerStats);
//   setTimeout(()=>{
//      window.location = '/quizzes/results'
//
//   }, 1000);
// }

// handleFinish(){
// const playerStats = {
//   score: this.state.score,
//   numberOfQuestions: this.state.numberOfQuestions,
//   numberOfAnsweredQuestions: this.state.numberOfAnsweredQuestions,
//   correctAnswers: this.state.correctAnswers,
//   wrongAnswers: this.state.wrongAnswers
// }
// console.log(playerStats);
// window.open('/quizzes/results')
// // history.push('/quizzes/results');
// // window.location.href = '/quizzes/results'
// // window.location.reload(false);
// }


  render(){
    if(!this.props.quiz) { return "Please select a quiz above." }

    const {currentQuestion } = this.state;


if (this.state.currentQuestionIndex<this.state.numberOfQuestions) {



    return (

      <div className="options">
      <h4>Question {this.state.currentQuestionIndex+1}/{this.state.numberOfQuestions}</h4>

      <h4>{currentQuestion.questionName}</h4>
      <ul id="id01">
        <li><p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[0]}</p></li>
        <li><p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[1]}</p></li>
        <li><p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[2]}</p></li>
        <li><p onClick={this.handleOptionClick}>{currentQuestion.correctAnswer}</p></li>
      </ul>

      <div>
      <button type="button" onClick={this.handleQuitButtonClick}>Quit quiz</button>
      <button type="button" onClick={this.handleNextButtonClick}>Skip this question</button>


      </div>

      </div>

    )
  }

  else {
  window.alert("The quiz has ended");

    return(

    <Fragment>
    <ResultSummary numberOfAnsweredQuestions={this.state.numberOfAnsweredQuestions}
    correctAnswers={this.state.correctAnswers}
    wrongAnswers={this.state.wrongAnswers}
    numberOfQuestions={this.state.numberOfQuestions}
    currentQuestionIndex={this.state.currentQuestionIndex}
    currentQuestion={this.state.currentQuestion}
    latestUser={this.state.latestUser}/>
    </Fragment>

    )
  }
  }

}

export default CreatedQuizQuestion;
