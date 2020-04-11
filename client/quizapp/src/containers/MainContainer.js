import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import QuizzesContainer from './QuizzesContainer';



const MainContainer = () => {

    return (
      <Router>
      <Fragment>

      <Switch>

      <Route path="/quizzes" component={QuizzesContainer}/>

      </Switch>

      </Fragment>
      </Router>
    )
}

export default MainContainer;
