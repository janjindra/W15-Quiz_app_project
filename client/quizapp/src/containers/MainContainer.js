import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import QuizzesContainer from './QuizzesContainer';
import CreateQuizContainer from './CreateQuizContainer';
import CreateQuestionContainer from './CreateQuestionContainer';
import ProfileContainer from './ProfileContainer';


const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
      <Route path="/quizzes" component={QuizzesContainer} />
      <Route path="/createaquiz" component={CreateQuizContainer} />
      <Route path="/createaquestion" component={CreateQuestionContainer} />
      // <Route path="/results" component={CreateQuizContainer} />
      <Route path="/profile" component={ProfileContainer} />
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
