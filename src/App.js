import React, { useState } from 'react';
import questions from './questions';
import Navbar from './Navbar';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	// const [isquizstarted , setisquiz] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<>
			<Navbar />
			<div className='app'>
				{showScore ? (
					<>
						<div className='score-section'>
							Result : {Math.trunc((score / questions.length)*100)}% <br />
							You scored {score} out of {questions.length}
							<button  style={{marginLeft: '40px'}} onClick={() => { setShowScore(false); setCurrentQuestion(0); setScore(0) }}>Restart</button>
						</div>
					</>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</>
	);
}
