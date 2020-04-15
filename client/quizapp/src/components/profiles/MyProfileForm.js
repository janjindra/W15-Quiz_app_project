import React , { Component } from 'react';
import Request from '../../helpers/request'

class MyProfileForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        url: ""
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleChange(event){
  let propertyName = event.target.name;
  let user = this.state.user
  user[propertyName] = event.target.value
  this.setState({user: user})
}

handleSubmit(event){
  event.preventDefault();
  this.props.onCreate(this.state.user)
}

render(){
  return (
    <div>
    <br></br><br></br><br></br><br></br>
    <p> Welcome to our Quiz App, create an account below and get into playing Quizzes right away!</p><br></br><br></br>
    <h1> Create an account </h1>
    <hr></hr>
    <form onSubmit={this.handleSubmit}>
    <label>Enter first name:</label>
    <input type="text" placeholder= "First Name" name="firstName" onChange={this.handleChange} value={this.state.user.firstName} /><br/>
    <label>Enter last name:</label>
    <input type="text" placeholder= "Last Name" name="lastName" onChange={this.handleChange} value={this.state.user.lastName} /><br/>
    <label>Enter email:</label>
    <input type="text" placeholder= "Email" name="email" onChange={this.handleChange} value={this.state.user.email} /><br/>
    <label>Enter a picture:</label>
    <input type="text" placeholder= "URL" name="url" onChange={this.handleChange} value={this.state.user.url} /><br/>
    <br></br><button type="submit">Create and Login</button>
    </form>
    </div>
  )
}



}

export default MyProfileForm;
