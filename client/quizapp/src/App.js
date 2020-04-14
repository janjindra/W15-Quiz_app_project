import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import Sidebar from "react-sidebar";
import LeftSidebar from './containers/LeftSidebar';



class App extends Component {




  render() {
    return (
      <div className="container">
        <div className="row" id="app">
          <div className="col-md-2" id="left-side-bar">
            <LeftSidebar className="left" />
          </div>
          <div className="col-md-8" id="center">
            <MainContainer className="main" />
          </div>
          <div className="col-md-2" id="right-side-bar">
            <LeftSidebar className="left" />
          </div>
      </div>
    </div>
    );
  }
}




export default App;
