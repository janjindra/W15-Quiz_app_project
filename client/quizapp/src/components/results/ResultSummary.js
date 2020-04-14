import React, {Component, Fragment} from 'react';


class ResultSummary extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  };



handleAgainButton(){
  window.location = '/quizzes';
}

  render(){
console.log(this.props);

    return(
      <Fragment>
      <h1>Results Page</h1>

      <img src="https://cdn.clipart.email/a1703c3bf965727f58edcc4a8ad7e941_kisspng-checkbox-check-mark-tick-clip-art-arachn-check-box-green-_920-955.jpeg" alt="" width="100" />
      <h3>Hey {this.props.latestUser.firstName} {this.props.latestUser.lastName}... Congratulations - you made it!</h3>
      <h2>Your Result: {Math.round((parseInt(this.props.correctAnswers)/parseInt(this.props.numberOfQuestions))*100)}%</h2>

      <ul>
      <li><p>Your Score: {this.props.correctAnswers}/{this.props.numberOfQuestions}</p></li>
      <li><p>Total Number of Questions: {this.props.numberOfQuestions}</p></li>
      <li><p>Number of Attempted Questions: {this.props.numberOfAnsweredQuestions}</p></li>
      <li><p>Number of Correct Answers: {this.props.correctAnswers}</p></li>
      <li><p>Number of Wrong Answers: {this.props.wrongAnswers}</p></li>
      <li><p>Number of Skipped Answers: {parseInt(this.props.numberOfQuestions)-parseInt(this.props.numberOfAnsweredQuestions)}</p></li>

      </ul>

      <button onClick={this.handleAgainButton} type="button"><h2>Play Again</h2></button>
      <button onClick={this.handleAgainButton} type="button"><h2>Home</h2></button>
      <br></br><br></br>
      </Fragment>

    )

  }
}

export default ResultSummary;
