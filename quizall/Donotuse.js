//This code is no longer needed (sorry for the confusion)

//import React from 'react';
//import PropTypes from 'prop-types'; // Import PropTypes for type-checking

const MovieInfo = ({ title, imageUrl, actor, genre }) => {
  return (
    <div>
      <h2>Movie: {title}</h2>
      <img src={imageUrl} alt={title} style={{ maxWidth: '200px', height: 'auto' }} />
      <ul>
        <li><strong>Actor:</strong> {actor}</li>
        <li><strong>Genre:</strong> {genre}</li>
      </ul>
    </div>
  );
};

// Define PropTypes for MovieInfo
MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default MovieInfo;






