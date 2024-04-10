import React, { useEffect, useState } from 'react';
import './MovieReviews.css'; // Import the CSS file for styles
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import HeartIcon from './heart.png'; // Import your heart icon

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false); // State to toggle review form display
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('recent'); // 'recent' or 'old' for date, 'high' or 'low' for rating
  const reviewsPerPage = 5; // Number of reviews to display per page
  const API_KEY = '1544ad476fda7fac67106a42cd220a58';
  const MOVIE_ID = '693134'; // Replace with the ID of the movie you want to fetch reviews for

  useEffect(() => {
    // Fetch movie reviews from API
    fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/reviews?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        // Set the retrieved reviews to the state
        setReviews(data.results);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, [API_KEY, MOVIE_ID]); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

// Function to open the review form popup
const openReviewForm = () => {
  setShowReviewForm(true);
};

// Function to close the review form popup
const closeReviewForm = () => {
  setShowReviewForm(false);
};

//pagination:
const totalPages = Math.ceil(reviews.length / reviewsPerPage);

const nextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

//sorting:
const handleSortChange = value => {
  setSortBy(value);
  setCurrentPage(1); // Reset to first page when sorting changes
};

  return (
    <div className="reviewsContainer">
      <div className="banner">
        <img src="/movie_poster.jpg" alt="Movie Poster" />
        <button className="trailer-button" onClick={openReviewForm}>
          <div className="trailer-icon">
            <span>Review this trailer</span>
          </div>
        </button>
      </div>
      <div className="movieTitle">
        <h1>Movie Title (YYYY)</h1>
      </div>
      <div className="review-link">
        {/* Toggle the review form visibility when the link or heart icon is clicked */}
        <h3 onClick={openReviewForm}>Review this film</h3>
        <img src={HeartIcon} alt="Heart Icon" className="heart-icon" onClick={openReviewForm} />
      </div>
      <div className="actions">
        <div className="filters">
          <div className="dropdown">
            <button className="dropbtn">Date</button>
            <div className="dropdown-content">
              <button onClick={() => handleSortChange('recent', 'date')}>Recent</button>
              <button onClick={() => handleSortChange('old', 'date')}>Old</button>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Rating</button>
            <div className="dropdown-content">
              <button onClick={() => handleSortChange('high', 'rating')}>High Rating</button>
              <button onClick={() => handleSortChange('low', 'rating')}>Low Rating</button>
            </div>
          </div>
        </div>
      </div>
     
      {/* Display the review form as a popup when showReviewForm is true */}
      {showReviewForm && <ReviewForm onClose={closeReviewForm} />}
      <div className="UserReviews">
        <h2>User Reviews</h2>
        <div className="user-reviews-container">
        {reviews.length > 0 ? (
  reviews.map((review, index) => (
    <div className="user-review" key={index}>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < review.rating ? "star" : "star-empty"}>&#9733;</span>
        ))}
      </div>
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </div>
  ))
) : (
  <p>No reviews available.</p>
)}
        </div>
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>&laquo; Prev</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next &raquo;</button>
      </div>
    </div>
  );
}

export default MovieReviews;



