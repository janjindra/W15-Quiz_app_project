import React, {Component, Fragment} from 'react';
import QuizDetail from '../components/quizzes/QuizDetail';
import QuizSelector from '../components/quizzes/QuizSelector';
import Request from '../helpers/request';
import CreatedQuizQuestion from '../components/quizzes/CreatedQuizQuestion';


class QuizzesContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
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
    });

    const requestUser = new Request();
    requestUser.get('/api/users')
    .then((data) => {
      this.setState({users: data})
    });
  }

  getLatestUser(){
    this.setState({latestUser: this.state.users[-1]})
    // for (var user of this.state.users){
    //   if (this.state.users.indexOf(user) === this.state.users.length-1){
    //     this.setState({latestUser: user})
    //   }
    // }
  }


  handleQuizSelected(quizName){
  //save it to the state
  this.setState({selectedQuizName: quizName})
}

render(){

  const selectedQuiz = this.state.quizzes.find(quiz => quiz.name===
      this.state.selectedQuizName)


  return (

    <Fragment>

    <QuizSelector quizzes={this.state.quizzes} onQuizSelected={this.handleQuizSelected}></QuizSelector>
    <CreatedQuizQuestion users={this.state.users} quiz={selectedQuiz}/>
    <QuizDetail questions={this.state.questions} quiz={selectedQuiz}/>
    </Fragment>

  )
}

}

export default QuizzesContainer;
