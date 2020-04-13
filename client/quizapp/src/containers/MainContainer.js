import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import QuizzesContainer from './QuizzesContainer';
import CreateQuizContainer from './CreateQuizContainer';
import CreateQuestionContainer from './CreateQuestionContainer';
import ProfileContainer from './ProfileContainer';
import ResultSummary from '../components/results/ResultSummary';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>

      <Route path="/profile" component={ProfileContainer} />
      <Route path="/quizzes" component={QuizzesContainer}/>
      <Route path="/createQuestions" component={CreateQuestionContainer}/>
      <Route path="/createQuizzes" component={CreateQuizContainer}/> // comment back in.
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
