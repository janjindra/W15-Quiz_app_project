import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Request from '../helpers/request'
import MyProfileForm from '../components/profiles/MyProfileForm'

class ProfileContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: ""
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/users')  // User maybe??
    .then((data) => {
      this.setState({user: data})
    })

  }

  handlePost(user){
    const request = new Request();
    request.post('/api/users', user) //is it profile???
    .then( () => {
      window.location = '/quizzes'
    })
  }

  render(){
    if(!this.state.user){
      return null
    }

    return(
      <Router>

    <div>
    <Switch>
    <Route exact path = '/login' render={() => {
      return <MyProfileForm onCreate={this.handlePost} />
    }} />
    </Switch>
    </div>

      </Router>
      // <Route exact path = '/profile/:id' render={(props) => {
      //   const user = this.findProfileById(props.match.params.id);
      //   return
      // }
    )
  }
}


export default ProfileContainer;
