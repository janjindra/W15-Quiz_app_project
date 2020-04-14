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
    <h1> Create a account: </h1>
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder= "First Name" name="firstName" onChange={this.handleChange} value={this.state.user.firstName} />
    <input type="text" placeholder= "Last Name" name="lastName" onChange={this.handleChange} value={this.state.user.lastName} />
    <input type="text" placeholder= "email" name="email" onChange={this.handleChange} value={this.state.user.email} />
    <input type="text" placeholder= "url" name="url" onChange={this.handleChange} value={this.state.user.url} />
    <button type="submit">Create and Login</button>
    </form>
    </div>
  )
}



}

export default MyProfileForm;
