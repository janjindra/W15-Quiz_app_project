import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import NavBar from '../NavBar.js';
import QuizzesContainer from './QuizzesContainer';
import CreateQuizContainer from './CreateQuizContainer';
import CreateQuestionContainer from './CreateQuestionContainer';
import ProfileContainer from './ProfileContainer';
import ResultSummary from '../components/results/ResultSummary';
import CreatedQuizQuestion from '../components/quizzes/CreatedQuizQuestion';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>

      <Route path="/profile" component={ProfileContainer} />
      <Route exact path="/quizzes" component={QuizzesContainer}/>
      <Route path="/quizzes/results" component={ResultSummary}/>

      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
