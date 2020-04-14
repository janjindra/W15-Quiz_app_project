// import QuizQuestion from './QuizQuestion.js';
import React, {Component, Fragment} from 'react';
import isEmpty from '../../helpers/is-empty';
import ResultSummary from '../results/ResultSummary';

class QuizDetail extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions: [],
			mythology: [],
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
		this.handleSkipButtonClick = this.handleSkipButtonClick.bind(this);
		// this.handleMythologyButton = this.handleMythologyButton.bind(this);
		// this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
	};


	static getDerivedStateFromProps(props, state){

		if(props.category){
			if (!isEmpty(state.nextQuestion)){
				if (props.category === 'mythology'){
					return {
						questions: props.mythology,
						numberOfQuestions: props.mythology.length,
						currentQuestion: props.mythology[state.currentQuestionIndex],
						nextQuestion: props.mythology[state.currentQuestionIndex+1],
						previousQuestion: props.mythology[state.currentQuestionIndex-1],
						answer: props.mythology[state.currentQuestionIndex].correctAnswer,
						latestUser: props.users[props.users.length-1]
					}
				}
				else if (props.category === 'sports') {
					return {
						questions: props.sports,
						numberOfQuestions: props.sports.length,
						currentQuestion: props.sports[state.currentQuestionIndex],
						nextQuestion: props.sports[state.currentQuestionIndex+1],
						previousQuestion: props.sports[state.currentQuestionIndex-1],
						answer: props.sports[state.currentQuestionIndex].correctAnswer,
						latestUser: props.users[props.users.length-1]
					}
				}
				else if (props.category === 'generalKnowledge') {
					return {
						questions: props.generalKnowledge,
						numberOfQuestions: props.generalKnowledge.length,
						currentQuestion: props.generalKnowledge[state.currentQuestionIndex],
						nextQuestion: props.generalKnowledge[state.currentQuestionIndex+1],
						previousQuestion: props.generalKnowledge[state.currentQuestionIndex-1],
						answer: props.generalKnowledge[state.currentQuestionIndex].correctAnswer,
						latestUser: props.users[props.users.length-1]
					}
				}
				else if (props.category === 'history') {
					return {
						questions: props.history,
						numberOfQuestions: props.history.length,
						currentQuestion: props.history[state.currentQuestionIndex],
						nextQuestion: props.history[state.currentQuestionIndex+1],
						previousQuestion: props.history[state.currentQuestionIndex-1],
						answer: props.history[state.currentQuestionIndex].correctAnswer,
						latestUser: props.users[props.users.length-1]
					}
				}
				else if (props.category === 'animals') {
					return {
						questions: props.animals,
						numberOfQuestions: props.animals.length,
						currentQuestion: props.animals[state.currentQuestionIndex],
						nextQuestion: props.animals[state.currentQuestionIndex+1],
						previousQuestion: props.animals[state.currentQuestionIndex-1],
						answer: props.animals[state.currentQuestionIndex].correctAnswer,
						latestUser: props.users[props.users.length-1]
					}
				}
				else if (props.category === 'geography') {
					return {
						questions: props.geography,
						numberOfQuestions: props.geography.length,
						currentQuestion: props.geography[state.currentQuestionIndex],
						nextQuestion: props.geography[state.currentQuestionIndex+1],
						previousQuestion: props.geography[state.currentQuestionIndex-1],
						answer: props.geography[state.currentQuestionIndex].correctAnswer,
						latestUser: props.users[props.users.length-1]
					}
				}
				else if (props.category === 'art') {
					return {
						questions: props.art,
						numberOfQuestions: props.art.length,
						currentQuestion: props.art[state.currentQuestionIndex],
						nextQuestion: props.art[state.currentQuestionIndex+1],
						previousQuestion: props.art[state.currentQuestionIndex-1],
						answer: props.art[state.currentQuestionIndex].correctAnswer,
						latestUser: props.users[props.users.length-1]
					}
				}
				else if (props.category === 'politics') {
					return {
						questions: props.politics,
						numberOfQuestions: props.politics.length,
						currentQuestion: props.politics[state.currentQuestionIndex],
						nextQuestion: props.politics[state.currentQuestionIndex+1],
						previousQuestion: props.politics[state.currentQuestionIndex-1],
						answer: props.politics[state.currentQuestionIndex].correctAnswer,
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
		if(this.props.category){
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
		if (this.state.nextQuestion !== undefined){
			this.setState(prevState=>({
				currentQuestionIndex: prevState.currentQuestionIndex+1
			}))
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
		this.setState(prevState => ({
			score: prevState.score +1,
			correctAnswers: prevState.correctAnswers+1,
			currentQuestionIndex: prevState.currentQuestionIndex+1,
			numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
		}));
	}

	wrongAnswer(){
		this.setState(prevState => ({
			wrongAnswers: prevState.wrongAnswers+1,
			currentQuestionIndex: prevState.currentQuestionIndex+1,
			numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
		}));
	}


	render(){
		if(!this.props.category) { return null }

		const {currentQuestion } = this.state;

		if (this.state.currentQuestionIndex<this.state.numberOfQuestions) {

			if (this.state.currentQuestion.incorrectAnswers.length !==1){

				// this is multiple choice answer
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
			else {

				//this is true/false choice answer
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

export default QuizDetail;
