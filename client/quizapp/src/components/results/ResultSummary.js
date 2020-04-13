import React, {Component, Fragment} from 'react';


class ResultSummary extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  };


componentDidMount(){

};


handleAgainButton(){
  window.location = '/quizzes';
}

  render(){
console.log(this.props);

    return(
      <Fragment>
      <h1>Results Page:</h1>
      <img src="https://cdn.clipart.email/a1703c3bf965727f58edcc4a8ad7e941_kisspng-checkbox-check-mark-tick-clip-art-arachn-check-box-green-_920-955.jpeg" alt="" width="100" />
      <h3>Hey {this.props.latestUser.firstName} {this.props.latestUser.lastName}... Congratulations - you made it!</h3>
      <h2>Your Result: {Math.round((parseInt(this.props.correctAnswers)/parseInt(this.props.numberOfAnsweredQuestions))*100)}%</h2>

      <ul>
      <h4>Your Score: {this.props.correctAnswers}/{this.props.numberOfQuestions}</h4>
      <h4>Total Number of Questions: {this.props.numberOfQuestions}</h4>
      <h4>Number of Attempted Questions: {this.props.numberOfAnsweredQuestions}</h4>
      <h4>Number of Correct Answers: {this.props.correctAnswers}</h4>
      <h4>Number of Wrong Answers: {this.props.wrongAnswers}</h4>
      <h4>Number of Skipped Answers: {parseInt(this.props.numberOfQuestions)-parseInt(this.props.numberOfAnsweredQuestions)}</h4>
      </ul>

      <button onClick={this.handleAgainButton} type="button">PLAY AGAIN</button>

      </Fragment>

    )

  }
}

export default ResultSummary;
