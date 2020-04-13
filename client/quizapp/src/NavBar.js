import React from 'react';

const NavBar = (props) => {
  return(
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
    <a href="/profile">Profile</a>
    </li>
    </ul>
    </header>
  )
}

export default NavBar;
