import React, {Component, Fragment} from 'react';

class QuizHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      latestUser: {}
    }
    // this.getDerivedStateFromProps=this.getDerivedStateFromProps.bind(this);
    // this.componentDidMount=this.componentDidMount.bind(this);
    this.getLatestUser=this.getLatestUser.bind(this);
  };



  getLatestUser(){
    this.setState({latestUser: this.props.users[this.props.users.length-1]})
  }

  componentDidMount(){
    if (this.props.users){
      this.getLatestUser();
    }
  }



  render(){
    return (
      <div className="quiz-header">
        <h1>Welcome! Let's play a Quiz now.</h1>
      </div>
    )
  }
}

export default QuizHeader;
