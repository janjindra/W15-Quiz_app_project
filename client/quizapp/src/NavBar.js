import React from 'react';

const NavBar = (props) => {
  return(
    <div>
    <title>
    <h1>JPP Quiz App</h1>
    </title>
    <header>
    <ul>
    <li className="navLink">
    <a href="/quizzes">Quizzes</a>
    </li>
    <li className="navLink">
    <a href="/createQuizzes">Create A Quiz</a>
    </li>
    <li className="navLink">
    <a href="/createQuestions">Create A Question</a>
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
