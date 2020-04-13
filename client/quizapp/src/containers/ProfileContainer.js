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

    // this.handleDelete = this.handleDelete.bind(this);
    // this.findUserById = this.findProfileById.bind(this);
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
      window.location = '/profile'
    })
  }

  // findProfileById(id){
  //   return this.state.user.find((user) => {
  //     return user.id === parseInt(id);
  //   });
  // }

  // handleDelete(id){
  //   const request = new Request();
  //   const url = '/api/profile/' + id;
  //   request.delete(url).then(() => {
  //     window.location = '/profile'; //re-route to quizzes instead??
  //   });
  // }

  render(){
    if(!this.state.user){
      return null
    }

    return(
      <Router>
      <Fragment>
      <Switch>
      <Route exact path = '/profile' render={() => {
        return <MyProfileForm onCreate={this.handlePost} />
      }} />
      </Switch>
      </Fragment>
      </Router>
      // <Route exact path = '/profile/:id' render={(props) => {
      //   const user = this.findProfileById(props.match.params.id);
      //   return
      // }
    )
  }
}


export default ProfileContainer;
