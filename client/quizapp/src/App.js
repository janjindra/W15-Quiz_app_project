import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import Sidebar from "react-sidebar";
import LeftSidebar from './containers/LeftSidebar';
import RightSidebar from './containers/RightSidebar';



class App extends Component {
  constructor(props){
      super(props);
      this.state = {
  }
}


  render() {

    return (

    <div>

    <div className="container">
      <div className="row" id="app">
        <div className="col-md-2" id="left-side-bar">
          <LeftSidebar className="left" />
        </div>
        <div className="col-md-6" id="center">
          <MainContainer className="main" />
        </div>
        <div className="col-md-4" id="right-side-bar">
          <RightSidebar className="left" />
        </div>
    </div>
  </div>

  </div>
    );
  }
}




export default App;
