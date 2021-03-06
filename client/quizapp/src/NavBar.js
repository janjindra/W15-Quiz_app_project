import React from 'react';

const NavBar = (props) => {
  return(
    <div>
    <header>
    <h1 className="h1-header">JPP Quizzes</h1>

    <ul className="ul-links-bar">
    <li className="navLink">
    <a href="/quizzes">Play A Quiz!</a>
    </li>
    <li className="navLink">
    <a href="/createQuizzes">Create A Quiz</a>
    </li>
    <li className="navLink">
    <a href="/createQuestions">Add A Question</a>
    </li>
    <li className="navLink">
    <a href="/login">Logout</a>
    </li>
    </ul>

    </header>
    </div>
  )
}

export default NavBar;
