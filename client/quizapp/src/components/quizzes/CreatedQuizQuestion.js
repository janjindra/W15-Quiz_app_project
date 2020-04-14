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
      skippedAnswers: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      latestUser: {},
    }

    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleSkipButtonClick = this.handleSkipButtonClick.bind(this);
    // this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
  };


  static getDerivedStateFromProps(props, state){

    if(props.quiz) {
      if (!isEmpty(state.nextQuestion)){
        if (props.quiz.name === "Random Questions"){



          return {
            //shuffling the array of 198 questions and picking random 15
            questions: props.quiz.questions,
            numberOfQuestions: props.quiz.questions.length,
            currentQuestion: props.quiz.questions[state.currentQuestionIndex],
            nextQuestion: props.quiz.questions[state.currentQuestionIndex+1],
            previousQuestion: props.quiz.questions[state.currentQuestionIndex-1],
            answer: props.quiz.questions[state.currentQuestionIndex].correctAnswer,
            latestUser: props.users[props.users.length-1]
          }
        } else {
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
    /* Make a loop that will continue until no switching has been done: */
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should switch place with the current item: */
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item, mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch and mark the switch as done: */
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



  handleSkipButtonClick(){
    if (this.props.quiz.name === "Random Questions"){
      if (this.state.nextQuestion !== undefined){
    this.setState(prevState=>({
      currentQuestionIndex: Math.floor(Math.random()*190)+1,
      skippedAnswers: prevState.skippedAnswers+1,
    }))
  }
      } else {
        if (this.state.nextQuestion !== undefined){
      this.setState(prevState=>({
        currentQuestionIndex: prevState.currentQuestionIndex+1
      }))
      }
  }
}

  // handlePreviousButtonClick(){
  //   if (this.state.previousQuestion !== undefined){
  //     this.setState(prevState=>({
  //       currentQuestionIndex: prevState.currentQuestionIndex-1
  //     }))
  //   }
  // }

  handleQuitButtonClick(){
    if(window.confirm("Are you sure you want to quit?")){
      window.location = '/quizzes';
    }
  }


  correctAnswer(){
if (this.props.quiz.name === "Random Questions"){
    this.setState(prevState => ({
      score: prevState.score +1,
      correctAnswers: prevState.correctAnswers+1,
      currentQuestionIndex: Math.floor(Math.random()*190)+1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
    }))
  } else {
    this.setState(prevState => ({
      score: prevState.score +1,
      correctAnswers: prevState.correctAnswers+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
  }))
}
}

  wrongAnswer(){
    if (this.props.quiz.name === "Random Questions"){
        this.setState(prevState => ({
          wrongAnswers: prevState.wrongAnswers+1,
          currentQuestionIndex: Math.floor(Math.random()*190)+1,
          numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
        }));
      } else {
    this.setState(prevState => ({
      wrongAnswers: prevState.wrongAnswers+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
    }));
  }
}


  render(){
    if(!this.props.quiz) { return null } else {

      const {currentQuestion } = this.state;

      //random questions
      if (this.props.quiz.name === "Random Questions") {

        if ((this.state.skippedAnswers+this.state.wrongAnswers+this.state.correctAnswers+1) <= 20){

          //random questions - miltiple answers
          if (this.state.currentQuestion.incorrectAnswers.length !==1){


            return (
              <div className="options">
              <h4>Question {this.state.skippedAnswers+this.state.wrongAnswers+this.state.correctAnswers+1}/20</h4>

              <h4>{currentQuestion.questionName}</h4>
              <ul id="id01">
              <li><p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[0]}</p></li>
              <li><p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[1]}</p></li>
              <li><p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[2]}</p></li>
              <li><p onClick={this.handleOptionClick}>{currentQuestion.correctAnswer}</p></li>
              </ul>

              <div>
              <button type="button" onClick={this.handleQuitButtonClick}><h3>Quit quiz</h3></button>
              <button type="button" onClick={this.handleSkipButtonClick}><h3>Skip this question</h3></button>
              </div>
              </div>
            )
          }
          // random questions - true/false questions
          else {

            //this is true/false choice answer
            return (
              <div className="options">
              <h4>Question {this.state.skippedAnswers+this.state.wrongAnswers+this.state.correctAnswers+1}/20</h4>
              <h4>{currentQuestion.questionName}</h4>
              <ul id="id01">
              <li><p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[0]}</p></li>
              <li><p onClick={this.handleOptionClick}>{currentQuestion.correctAnswer}</p></li>
              </ul>
              <div>
              <button type="button" onClick={this.handleQuitButtonClick}><h3>Quit quiz</h3></button>
              <button type="button" onClick={this.handleSkipButtonClick}><h3>Skip this question</h3></button>
              </div>
              </div>

            )
          }
        }

        //random questions - end quiz and show results
        else {
          window.alert("The quiz has ended");

          return(

            <Fragment>

            <ResultSummary numberOfAnsweredQuestions={this.state.numberOfAnsweredQuestions}
            correctAnswers={this.state.correctAnswers}
            wrongAnswers={this.state.wrongAnswers}
            skippedAnswers={this.state.skippedAnswers}
            numberOfQuestions={this.state.numberOfQuestions}
            currentQuestionIndex={this.state.currentQuestionIndex}
            currentQuestion={this.state.currentQuestion}
            latestUser={this.state.latestUser}
            quiz={this.props.quiz}/>
            </Fragment>
          )

        }
      }

      else {
        if (this.props.quiz.name !== "Random Questions") {

          if (this.state.currentQuestionIndex<this.state.numberOfQuestions) {
            //every other quiz but random questions quiz
            //every other quiz but random questions quiz - multiple answers
            if (this.state.currentQuestion.incorrectAnswers.length !==1){

              //every other quiz but random questions quiz - multiple choice answer
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
                <button type="button" onClick={this.handleQuitButtonClick}><h3>Quit quiz</h3></button>
                <button type="button" onClick={this.handleSkipButtonClick}><h3>Skip this question</h3></button>
                </div>
                </div>
              )
            }
            //every other quiz but random questions quiz - true/false questions
            else {

              return (
                <div className="options">
                <h4>Question {this.state.currentQuestionIndex+1}/{this.state.numberOfQuestions}</h4>
                <h4>{currentQuestion.questionName}</h4>
                <ul id="id01">
                <li><p onClick={this.handleOptionClick}>{currentQuestion.incorrectAnswers[0]}</p></li>
                <li><p onClick={this.handleOptionClick}>{currentQuestion.correctAnswer}</p></li>
                </ul>
                <div>
                <button type="button" onClick={this.handleQuitButtonClick}><h3>Quit quiz</h3></button>
                <button type="button" onClick={this.handleSkipButtonClick}><h3>Skip this question</h3></button>
                </div>
                </div>

              )
            }
          }

          //every other quiz but random questions quiz - end quiz and show results
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
              latestUser={this.state.latestUser}
              quiz={this.props.quiz}/>
              </Fragment>
            )

          }

        }
      }

    }
  }
}

export default CreatedQuizQuestion;
