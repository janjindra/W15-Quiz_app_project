import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateQuestionContainer from './CreateQuestionContainer';

const MainContainer = () => {
    return (

      <CreateQuestionContainer />


// Below to be used when creating routes. 

      // <Router>
      //   <Fragment>
      //       <Switch>
      //         <Route path="/createQuestions" component={CreateQuestionContainer}/>
      //       </Switch>
      //   </Fragment>
      // </Router>
    )
}
export default MainContainer;
