import React, {Component, Fragment} from 'react';
import QuizDetail from '../components/quizzes/QuizDetail';
import QuizSelector from '../components/quizzes/QuizSelector';
import Request from '../helpers/request';
import CreatedQuizQuestion from '../components/quizzes/CreatedQuizQuestion';
import QuizHeader from '../components/quizzes/QuizHeader';

class QuizzesContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      questions: [],
      selectedQuizName: "",
      quizzes: [],
      mythology: [],
      sports: [],
      generalKnowledge: [],
      history: [],
      animals: [],
      art: [],
      politics: [],
      geography: [],
      selectedCategoryName: "",
      latestUser: {}
    }
    this.handleQuizSelected = this.handleQuizSelected.bind(this);
    this.handleCategorySelected = this.handleCategorySelected.bind(this);
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

    const requestMy = new Request();
    requestMy.get('/api/questions?category=Mythology')
    .then((data) => {
      this.setState({mythology: data})
    });

    const requestAn = new Request();
    requestAn.get('/api/questions?category=Animals')
    .then((data) => {
      this.setState({animals: data})
    });

    const requestHi = new Request();
    requestHi.get('/api/questions?category=History')
    .then((data) => {
      this.setState({history: data})
    });

    const requestGK = new Request();
    requestGK.get('/api/questions?category=General%20Knowledge')
    .then((data) => {
      this.setState({generalKnowledge: data})
    });

    const requestSp = new Request();
    requestSp.get('/api/questions?category=Sports')
    .then((data) => {
      this.setState({sports: data})
    });

    const requestGe = new Request();
    requestGe.get('/api/questions?category=Geography')
    .then((data) => {
      this.setState({geography: data})
    });

    const requestPo = new Request();
    requestPo.get('/api/questions?category=Politics')
    .then((data) => {
      this.setState({politics: data})
    });

    const requestAr = new Request();
    requestAr.get('/api/questions?category=Art')
    .then((data) => {
      this.setState({art: data})
    });
  }



  handleQuizSelected(quizName){
    //save it to the state
    this.setState({selectedQuizName: quizName})
  }

  getLatestUser(){
    //save it to the state
    this.setState({latestUser: this.state.users[this.state.users.langht-1]})
  }

  handleCategorySelected(categoryName){
    //save it to the state
    this.setState({selectedCategoryName: categoryName})
  }


  render(){

    const selectedQuiz = this.state.quizzes.find(quiz => quiz.name===
      this.state.selectedQuizName)

      const selectedCategory =  this.state.selectedCategoryName;
// <QuizDetail users={this.state.users} questions={this.state.questions} mythology={this.state.mythology} sports={this.state.sport} generalKnowledge={this.generalKnowledge} history={this.history} animals={this.animals}/>

      return (



      <div className="quizzes">



      <QuizHeader users={this.state.users[this.state.users.length-1]}/>
<br></br>
      { (this.state.selectedQuizName==="" && this.state.selectedCategoryName==="") ? <QuizSelector quizzes={this.state.quizzes} onQuizSelected={this.handleQuizSelected} onCategorySelected={this.handleCategorySelected}/> : null }

      <QuizDetail users={this.state.users} quiz={selectedQuiz} mythology={this.state.mythology} sports={this.state.sports} generalKnowledge={this.state.generalKnowledge} history={this.state.history} animals={this.state.animals} geography={this.state.geography} art={this.state.art} politics={this.state.politics} category={selectedCategory}  />

      <CreatedQuizQuestion users={this.state.users} quiz={selectedQuiz}/>
<br></br><br></br>

{ (this.state.selectedQuizName==="" && this.state.selectedCategoryName==="") ? <img src="https://pngimage.net/wp-content/uploads/2018/06/quiz-png-3.png" alt="" width="500" /> : null }




</div>



      )
    }
  }

  export default QuizzesContainer;
