import React, {Component, Fragment} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import QuizDetail from '../components/quizzes/QuizDetail';
import QuizSelector from '../components/quizzes/QuizSelector';
import Request from '../helpers/request';
import CreatedQuizQuestion from '../components/quizzes/CreatedQuizQuestion';


class QuizzesContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      selectedQuizName: "",
      quizzes: []
    }
    this.handleQuizSelected = this.handleQuizSelected.bind(this);
  };

  componentDidMount(){
    const request = new Request();
    request.get('/api/questions')
    .then((data) => {
      this.setState({questions: data})
    });

    const requestb = new Request();
    requestb.get('/api/quizzes')
    .then((data) => {
      this.setState({quizzes: data})
    })
  }


  handleQuizSelected(quizName){
  //save it to the state
  this.setState({selectedQuizName: quizName})
}

render(){

  const selectedQuiz = this.state.quizzes.find(quiz => quiz.name===
      this.state.selectedQuizName)
  return (

    <div>
    <QuizSelector quizzes={this.state.quizzes} onQuizSelected={this.handleQuizSelected}></QuizSelector>
    <CreatedQuizQuestion quiz={selectedQuiz}/>
    <QuizDetail questions={this.state.questions} quiz={selectedQuiz}/>
    </div>

  )
}

}

export default QuizzesContainer;
