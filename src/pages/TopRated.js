import React, { useEffect, useState } from 'react';
import './styling.css'
const TRated = () => {
  const [movieLists, setTRatedList] = useState([]);

  const Best = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d98b6a4a470bc2415959e8cfff5c445e")
      .then(res => res.json())
      .then(json => setTRatedList(json.results));
  };

  useEffect(() => {
    Best();
  }, []);

  const handleMouseEnter = (indexs) => {
    const trated_image = document.getElementById(`trated_image_${indexs}`);
    const trated_rectangles = document.getElementById(`trated_rectangles_${indexs}`);
    if (trated_image && trated_rectangles) {
      trated_image.style.transform = "scale(1.05)"; // Enlarge by 5%
      trated_rectangles.style.opacity = 1; // Show trated_rectangles
    }
  };

  const handleMouseLeave = (indexs) => {
    const trated_image = document.getElementById(`trated_image_${indexs}`);
    const trated_rectangles = document.getElementById(`trated_rectangles_${indexs}`);
    if (trated_image && trated_rectangles) {
      trated_image.style.transform = "scale(1)"; // Restore original size
      trated_rectangles.style.opacity = 0; // Hide trated_rectangles
    }
  };

  return (
    <div style={{ backgroundColor: '#1E0D1E', padding: '40px' }}>
      <h1 style={{ color: 'white', fontSize: '45px' }}>Best Rated</h1>
      {movieLists.map((movie, indexs) => (
              // <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

        <div key={indexs} style={{ position: 'relative', display: 'inline-block', justifyContent: 'center' }}>
          <img
            id={`trated_image_${indexs}`}
            className='array'
            
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onMouseEnter={() => handleMouseEnter(indexs)}
            onMouseLeave={() => handleMouseLeave(indexs)}
          />
          <div id={`trated_rectangles_${indexs}`} className='info'>
            <h2 style={{ color: 'white', marginTop: '15px', marginBottom: '0px' }}>{movie.title || movie.name} </h2>
            <h3 style={{ color: 'white', marginTop: '0px', margin: '3px'}}>
              {movie.vote_average ? `${String(movie.vote_average).substring(0, 3)}/10` : ''}
            </h3>
            <p style={{ color: 'white', marginTop: '5px' }}>
              {movie.overview && movie.overview.length > 250 ? `${movie.overview.substring(0, 250)}...` : movie.overview}</p>
          </div>
        </div>
      ))}
      <p style={{ color: 'white' }}>Courtesy of TMDb</p>
    </div>
  );
};

export default TRated;