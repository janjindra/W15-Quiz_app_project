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

if ((this.props.quiz) && (this.props.quiz.name==="Random Questions")){
    return(
      <div className="results">
      <h1>Results Page</h1>

      <img src="images/tick.png" alt="" width="100" />
      <h3>Hello {this.props.latestUser.firstName} {this.props.latestUser.lastName},</h3>
       <h3>Congratulations - you made it!</h3>
      <h2>Your Result: {Math.round((parseInt(this.props.correctAnswers)/20)*100)}%</h2>

      <ul>
      <li className="r-item"><p id="results-item">Your Score: {this.props.correctAnswers}/20</p></li>
      <li className="r-item"><p id="results-item">Total Number of Questions: 20</p></li>
      <li className="r-item"><p id="results-item">Number of Attempted Questions: {this.props.numberOfAnsweredQuestions}</p></li>
      <li className="r-item"><p id="results-item">Number of Correct Answers: {this.props.correctAnswers}</p></li>
      <li className="r-item"><p id="results-item">Number of Wrong Answers: {this.props.wrongAnswers}</p></li>
      <li className="r-item"><p id="results-item">Number of Skipped Answers: {this.props.skippedAnswers}</p></li>

      </ul><br></br><br></br>

      <button onClick={this.handleAgainButton} type="button"><h3>Play Again</h3></button>
      <button onClick={this.handleAgainButton} type="button"><h3>Home</h3></button>
      <br></br><br></br>
      </div>

    )
  } else {
    return(
      <div className="results">
      <h1>Results Page</h1>

      <img src="images/tick.png" alt="" width="100" />
      <h3>Hello {this.props.latestUser.firstName} {this.props.latestUser.lastName},</h3>
       <h3>Congratulations - you made it!</h3>
       <h2>Your Result: {Math.round((parseInt(this.props.correctAnswers)/parseInt(this.props.numberOfQuestions))*100)}%</h2>

      <ul>
      <li className="r-item"><p id="results-item">Your Score: {this.props.correctAnswers}/{this.props.numberOfQuestions}</p></li>
      <li className="r-item"><p id="results-item">Total Number of Questions: {this.props.numberOfQuestions}</p></li>
      <li className="r-item"><p id="results-item">Number of Attempted Questions: {this.props.numberOfAnsweredQuestions}</p></li>
      <li className="r-item"><p id="results-item">Number of Correct Answers: {this.props.correctAnswers}</p></li>
      <li className="r-item"><p id="results-item">Number of Wrong Answers: {this.props.wrongAnswers}</p></li>
      <li className="r-item"><p id="results-item">Number of Skipped Answers: {parseInt(this.props.numberOfQuestions)-parseInt(this.props.numberOfAnsweredQuestions)}</p></li>

      </ul><br></br><br></br>

      <button onClick={this.handleAgainButton} type="button"><h3>Play Again</h3></button>
      <button onClick={this.handleAgainButton} type="button"><h3>Home</h3></button>
      <br></br><br></br>
      </div>

    )

  }

  }
}

export default ResultSummary;
