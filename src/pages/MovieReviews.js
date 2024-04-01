import React, { useEffect, useState } from 'react';
import './MovieReviews.css'; // Import the CSS file for styles
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import HeartIcon from './heart.png'; // Import your heart icon

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false); // State to toggle review form display

  useEffect(() => {
    // Fetch movie reviews from API
    fetch('YOUR_API_ENDPOINT')
      .then(response => response.json())
      .then(data => {
        // Set the retrieved reviews to the state
        setReviews(data.reviews);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  // Function to open the review form popup
  const openReviewForm = () => {
    setShowReviewForm(true);
  };

  // Function to close the review form popup
  const closeReviewForm = () => {
    setShowReviewForm(false);
  };

  return (
    <div className="container">
      <div className="banner">
        <img src="movie_poster.jpg" alt="Movie Poster" />
      </div>
      <h1>Movie Title (YYYY)</h1>
      <div className="review-link">
        {/* Toggle the review form visibility when the link or heart icon is clicked */}
        <h3 onClick={openReviewForm}>Review this film</h3>
        <img src={HeartIcon} alt="Heart Icon" className="heart-icon" onClick={openReviewForm} />
      </div>
      {/* Display the review form as a popup when showReviewForm is true */}
      {showReviewForm && <ReviewForm onClose={closeReviewForm} />}
      <h2>User Reviews</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.headline}</h3>
            <p>By: {review.username}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieReviews;



