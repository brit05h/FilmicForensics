import React from 'react';
import movies from './movieforreal'; 

const MovieSuggest = ({ mostCommonActor, mostCommonGenre, onRetakeQuiz }) => {
  // Function to find a matching movie
  const findMovie = () => {
    const filteredMovies = movies.filter(movie => 
      movie.actor === parseInt(mostCommonActor) && movie.genre === parseInt(mostCommonGenre)
    );
    return filteredMovies.length > 0 ? filteredMovies[0] : null;
  };

  const suggestedMovie = findMovie();

  // Render the suggested movie or a message if none was found
  return (
    <div>
      {suggestedMovie ? (
        <div>
          <h2>Recommended Movie: {suggestedMovie.title}</h2>
          <img src={suggestedMovie.imageUrl} alt={suggestedMovie.title} style={{ width: '200px' }} />
          <div>
            <button className='DR-quiz-button' onClick={() => { alert("More information coming soon!"); }}>
              Find out more about this movie
            </button>
            <button className='DR-quiz-button' onClick={onRetakeQuiz}>
              Not satisfied? Take the quiz again
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>You are so unique we couldn't find a movie for you. Why not try again?</p>
          <button className='DR-quiz-button' onClick={onRetakeQuiz}>
            Take the quiz again
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSuggest;

