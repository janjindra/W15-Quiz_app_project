import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateQuestionForm from '../components/createQuestions/CreateQuestionForm';
import Request from '../helpers/request';


class CreateQuestionContainer extends Component{
  constructor(props){
    super(props)
  }

  render(){


    return (
      <CreateQuestionForm/>
    )
  }
}
export default CreateQuestionContainer;
