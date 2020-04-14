import React, { Component } from 'react';
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
  { url: 'https://www.eonline.com/uk/news', name: 'Celebrities' }
];



class LeftSidebar extends Component {

  constructor(){
    super();
    this.state = {
      style:"menu active",
      menuStatus:"open"
    };
  };


  render() {
    return (
      <div>
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
    );
  }
}




export default LeftSidebar;
