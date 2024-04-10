import React, { useEffect, useState } from 'react';
import fetchTopRatedMovies from './topratedData';
import './styling.css'
const TRated = () => {
  const [movieLists, setTRatedList] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies().then(data =>{
      setTRatedList(data);
    });
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
      <h1 style={{ color: 'white', fontSize: '75px'}}>Best Rated</h1>
      {movieLists.map((movie, indexs) => (
              // <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

        <div key={indexs} style={{ position: 'relative', display: 'inline-block', justifyContent: 'center' }}>
          <img //Gets the pictures for the array
            id={`trated_image_${indexs}`}
            className='ssarray'
            
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onMouseEnter={() => handleMouseEnter(indexs)}
            onMouseLeave={() => handleMouseLeave(indexs)}
          />
          {/* tooltip */}
          <div id={`trated_rectangles_${indexs}`} className='ssinfo'>
            <h2 style={{ fontSize: '24px', color: 'white', marginTop: '15px', marginBottom: '0px', fontWeight: 'bold' }}>{movie.title || movie.name} </h2>
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
