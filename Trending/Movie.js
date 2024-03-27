import React, { useEffect, useState } from 'react';
import './styling.css'
const Movie = () => {
  const [movieList, setMovieList] = useState([]);

  const Trending = () => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d98b6a4a470bc2415959e8cfff5c445e")
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };

  useEffect(() => {
    Trending();
  }, []);

  const handleMouseEnter = (index) => {
    const image = document.getElementById(`image_${index}`);
    const rectangle = document.getElementById(`rectangle_${index}`);
    if (image && rectangle) {
      image.style.transform = "scale(1.05)"; // Enlarge by 5%
      rectangle.style.opacity = 1; // Show rectangle
    }
  };

  const handleMouseLeave = (index) => {
    const image = document.getElementById(`image_${index}`);
    const rectangle = document.getElementById(`rectangle_${index}`);
    if (image && rectangle) {
      image.style.transform = "scale(1)"; // Restore original size
      rectangle.style.opacity = 0; // Hide rectangle
    }
  };

  return (
    <div style={{ backgroundColor: '#1E0D1E', padding: '40px' }}>
      <h1>Trending</h1>
      {movieList.map((movie, index) => (
        <div key={index} style={{ position: 'relative', display: 'inline-block', justifyContent: 'center' }}>
          <img className='array'
            id={`image_${index}`}            
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
          <div id={`rectangle_${index}`} className='info'>
            <h2 style={{ color: 'white', marginTop: '15px', marginBottom: '0px' }}>{movie.title || movie.name} </h2>
            <h3 style={{ color: 'white', marginTop: '0px', margin: '3px'}}>
              {movie.vote_average ? `${String(movie.vote_average).substring(0, 3)}/10` : ''}
            </h3>
            <p style={{ color: 'white', marginTop: '5px' }}>
              {movie.overview && movie.overview.length > 300 ? `${movie.overview.substring(0, 300)}...` : movie.overview}</p>
          </div>
        </div>
      ))}
      <p style={{ color: 'white' }}>Courtesy of TMDb</p>
    </div>
  );
};

export default Movie;
