import React, { useEffect, useState } from 'react';
import fetchTrendingMovies from './trendingData';
import './styling.css'
const TrendMovie = () => {
  const [movieList, setTrendingList] = useState([]);
  
  useEffect(() => {
    fetchTrendingMovies().then(data =>{
      setTrendingList(data);
    });
  }, []);

  const handleMouseEnter = (index) => {
    const trend_image = document.getElementById(`trend_image_${index}`);
    const rectangle = document.getElementById(`rectangle_${index}`);
    if (trend_image && rectangle) {
      trend_image.style.transform = "scale(1.05)"; // Enlarge by 5%
      rectangle.style.opacity = 1; // Show rectangle
    }
  };

  const handleMouseLeave = (index) => {
    const trend_image = document.getElementById(`trend_image_${index}`);
    const rectangle = document.getElementById(`rectangle_${index}`);
    if (trend_image && rectangle) {
      trend_image.style.transform = "scale(1)"; // Restore original size
      rectangle.style.opacity = 0; // Hide rectangle
    }
  };

  return (
    <div style={{ backgroundColor: '#1E0D1E', padding: '1px' }}>
      <h1>Trending</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movieList.map((movie, index) => (
        <div key={index} style={{ position: 'relative', display: 'inline-block'}}>
          <img className='ssarray'
            id={`trend_image_${index}`}            
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
          <div id={`rectangle_${index}`} className='ssinfo'>
            <h2 style={{ color: 'white', marginTop: '15px', marginBottom: '0px' }}>{movie.title || movie.name} </h2>
            <h3 style={{ color: 'white', marginTop: '0px', margin: '3px'}}>
              {movie.vote_average ? `${String(movie.vote_average).substring(0, 3)}/10` : ''}
            </h3>
            <p style={{ color: 'white', marginTop: '5px' }}>
              {movie.overview && movie.overview.length > 300 ? `${movie.overview.substring(0, 300)}...` : movie.overview}</p>
          </div>
        </div>
      ))}
      </div>
      <p style={{ color: 'white' }}>Courtesy of TMDb</p>
    </div>
  );
};

export default TrendMovie;
