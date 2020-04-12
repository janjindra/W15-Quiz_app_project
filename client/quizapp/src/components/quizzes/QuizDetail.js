import React from 'react';
import QuizQuestion from './QuizQuestion.js';


const QuizDetail = (props) => {

	if(props.quiz) {
		 return "." } else {
	}

	const questions = props.questions.map((question, index) => {
		return (
			<li key={index} className="component-item">
				<div className="component">
					<QuizQuestion question={question}/>
				</div>
			</li>
		)
	})

	return (
		<ul className="component-list">
			{questions}
		</ul>

	)
}

 export default QuizDetail;
