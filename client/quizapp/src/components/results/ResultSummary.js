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

if (this.props.quiz.name==="Random Questions"){
    return(
      <div className="results">
      <h1>Results Page</h1>

      <img src="https://lh3.googleusercontent.com/proxy/iV64n1r5OzLaFL9kD2R7-0aw7FEaNfxgg13BJSAi4T0tP2fhrJEEKLExIKZ2GKirMTvJbRFRhUXGujIieYmw6IY-Z88UvFBuUQarR_egimGy1iHKOwlXD4QNQatBL6tV9Z6fCiFSvS8TjGZjTCkV" alt="" width="100" />
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

      </ul>

      <button onClick={this.handleAgainButton} type="button"><h2>Play Again</h2></button>
      <button onClick={this.handleAgainButton} type="button"><h2>Home</h2></button>
      <br></br><br></br>
      </div>

    )
  } else {
    return(
      <div className="results">
      <h1>Results Page</h1>

      <img src="https://lh3.googleusercontent.com/proxy/iV64n1r5OzLaFL9kD2R7-0aw7FEaNfxgg13BJSAi4T0tP2fhrJEEKLExIKZ2GKirMTvJbRFRhUXGujIieYmw6IY-Z88UvFBuUQarR_egimGy1iHKOwlXD4QNQatBL6tV9Z6fCiFSvS8TjGZjTCkV" alt="" width="100" />
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

      </ul>

      <button onClick={this.handleAgainButton} type="button"><h2>Play Again</h2></button>
      <button onClick={this.handleAgainButton} type="button"><h2>Home</h2></button>
      <br></br><br></br>
      </div>

    )



  }

  }
}

export default ResultSummary;
