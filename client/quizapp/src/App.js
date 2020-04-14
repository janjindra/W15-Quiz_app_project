import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import Sidebar from "react-sidebar";

const navLinks = [
  { url: 'https://www.nationalgeographic.com/', name: 'Geography' },
  { url: 'https://www.history.co.uk/', name: 'History' },
  { url: 'https://www.britannica.com/', name: 'General-Knowledge' },
  { url: 'https://mymodernmet.com/free-online-art-resources/', name: 'Art' },
  { url: 'https://www.theoi.com/', name: 'Mythology' },
  { url: 'http://www.biggestglobalsports.com/', name: 'Sports' },
  { url: 'https://www.politics.co.uk/', name: 'Politics' },
  { url: 'https://a-z-animals.com/', name: 'Animals' },
  { url: 'https://www.whatcar.com/', name: 'Vehicles' },
  { url: 'https://www.brainpop.com/artsandmusic/', name: 'Entertainment: Music' },
  { url: 'https://www.sciencedaily.com/', name: 'Science: Mathematics' },
  { url: 'https://www.eonline.com/uk/news', name: 'Celebrities' },
];



class App extends Component {

  constructor(){
    super();
    this.state = {
      style:"menu",
      menuStatus:"open"
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    switch(this.state.menuStatus)
    {
      case "open":
        this.setState({
          menuStatus:"close",
          style:"menu active"
        });
        break;
      case "close":
        this.setState({
          menuStatus:"open",
          style:"menu"
        });
        break;
    }
  }

  render() {
    return (
      <div>
      <MainContainer />
      <div>
        <button className="sidebar-button" onClick={this.handleClick}>Resources Menu</button>
        <div className={this.state.style}>
          <ul className="sidebar-list-ul">
            {navLinks.map(({ url, name }) => (
              <li className="sidebar-list-li">
                <a className="sidebar-a-part" href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    );
  }
}




export default App;
