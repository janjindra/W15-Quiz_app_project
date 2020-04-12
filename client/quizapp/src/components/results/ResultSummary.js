import React, {Component, Fragment} from 'react';


class ResultSummary extends Component{
  constructor(props){
    super(props);
    this.state = {
    }

  };


  render(){

    // const questions = this.props.questions.map((question, index) => {
  	// 	return (
  	// 		<li key={index} className="component-item">
  	// 			<div className="component">
  	// 				<QuizQuestion question={question}/>
  	// 			</div>
  	// 		</li>
  	// 	)
  	// })

    return(
      <Fragment>
      <h1>Results Page:</h1>
      <h4>Total number of questions: {this.props.numberOfQuestions}</h4>
      <h4>Correct answers: {this.props.correctAnswers}</h4>
      <h4>Wrong answers: {this.props.wrongAnswers}</h4>
      <h4>Your score is: {this.props.correctAnswers}/{this.props.numberOfAnsweredQuestions}</h4>
      <h4>Success rate: {Math.round((parseInt(this.props.correctAnswers)/parseInt(this.props.numberOfAnsweredQuestions))*100)}%</h4>


      </Fragment>

    )

  }
}

export default ResultSummary;
