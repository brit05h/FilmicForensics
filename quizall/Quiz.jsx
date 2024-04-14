import React, { useState } from 'react';
import { movieQuizz } from './testdorian'; // Ensure correct import path
import { calculateMostCommonActorAndGenre } from './movielogic'; // Ensure correct import path
import MovieSuggest from './moviesuggest'; // Ensure correct import path

const Quiz = () => {
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const buttonStyle = {
        display: 'block',
        marginBottom: '10px', 
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#be3144',
        color: '#000000',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    };

    // Handler for when a user selects an answer
    const handleAnswerSelect = (answer) => {
      const newAnswers = [...answers, answer];
      if (newAnswers.length === movieQuizz.questions.length) {
        // All questions have been answered
        const { mostCommonActor, mostCommonGenre } = calculateMostCommonActorAndGenre(newAnswers);
        setResult({ mostCommonActor, mostCommonGenre });
      } else {
        // Continue to the next question
        setAnswers(newAnswers);
      }
    };

    // Function to reset the quiz
    const resetQuiz = () => {
      setAnswers([]); // Reset the answers array
      setResult(null); // Reset the result object
    };

    // Render the quiz results or the next question
    const renderQuiz = () => {
      if (result) {
        // Quiz is completed, show the movie suggestion
        return (
          <MovieSuggest 
            mostCommonActor={result.mostCommonActor}
            mostCommonGenre={result.mostCommonGenre}
            onRetakeQuiz={resetQuiz} // Passing the reset function
          />
        );
      }

      // Show the current question and answers
      const currentQuestionIndex = answers.length;
      const question = movieQuizz.questions[currentQuestionIndex];
      return (
        <div>
          <h2 className='DR-question-header'>{question.question}</h2>
          {question.answers.map((a, index) => (
            <button key={index} onClick={() => handleAnswerSelect(a)} style={buttonStyle}>
              {a.content}
            </button>
          ))}
        </div>
      );
    };

    return (
      <div>
        {renderQuiz()}
      </div>
    );
};

export default Quiz;
