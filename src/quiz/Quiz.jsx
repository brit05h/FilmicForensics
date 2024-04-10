import React, { useState } from 'react';
import Question from './Question'; // Import the Question component
import { movieQuizz } from './testdorian'; // Import movieQuizz object from testdorian

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswerSelect = (answer) => {
    setAnswers({ ...answers, [currentQuestionIndex]: answer });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderQuestion = () => {
    const question = movieQuizz.questions[currentQuestionIndex];
    if (!question) return null; // Prevent rendering if no more questions

    return (
      <div className="quiz-container">
        <Question
          question={question.question}
          choices={question.choices}
          onAnswerSelect={handleAnswerSelect}
        />
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


