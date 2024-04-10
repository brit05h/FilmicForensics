import React, { useState } from 'react';
import { movieQuizz } from './testdorian'; // Import movieQuizz object from testdorian

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleChoiceSelect = (choice) => {
    setAnswers({ ...answers, [currentQuestionIndex]: choice });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const buttonStyle = {
    display: 'block',
    marginBottom: '10px', // Adjust spacing between buttons if needed
    padding: '10px 20px', // Adjust padding as needed
    border: 'none',
    backgroundColor: '#be3144', // Set background color
    color: '#000000', // Set text color
    cursor: 'pointer',
    borderRadius: '5px', // Add rounded corners
    transition: 'background-color 0.3s ease', // Add transition effect
  };

  const renderQuestion = () => {
    const question = movieQuizz.questions[currentQuestionIndex];
    if (!question) return null; // Prevent rendering if no more questions

    return (
      <div className="quiz-container">
        <p className="question-text">{question.question}</p> 
        <div className="choices">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleChoiceSelect(answer.type)}
              style={buttonStyle}
            >
              {answer.content}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderQuestion()}
      {currentQuestionIndex >= movieQuizz.questions.length && (
        <div>
          <h2>Quiz completed!</h2>
          <p>Answers: {JSON.stringify(answers)}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;



