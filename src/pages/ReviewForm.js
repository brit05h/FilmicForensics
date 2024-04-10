import React, { useState } from 'react';
import './ReviewForm.css'; // Import the CSS file for custom styles

function ReviewForm({ onClose }) {
  // State variables to store form input values
  const [headline, setHeadline] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [spoilers, setSpoilers] = useState(false); // Spoilers state

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();


    console.log('Submitting review:', { headline, reviewText, spoilers });
    // Reset form fields after submission 
    setHeadline('');
    setReviewText('');
    setSpoilers(false);
    // Close the popup
    onClose();
  };

  return (
    <div className="review-form-popup">
      <span className="close" onClick={onClose}>&times;</span>
      <div className="movie-info">
        <div className="star-rating">
          <h3>Movie Title (YYYY)</h3>
          <p>YOUR RATING</p>
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`star ${index < 3 ? 'filled' : ''}`}>&#9733;</span>
          ))}
        </div>
        <div className="movie-poster">
          <img src="/movie.jpeg" alt="Movie Poster" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="headline-label">
          YOUR REVIEW
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            required
            placeholder="Write a headline..."
          />
        </label>
        <label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
            placeholder="Write your review here..."
          ></textarea>
        </label>
        <div className="spoilers">
          <label>
            Does this review contain spoilers?
          </label>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={spoilers}
                onChange={() => setSpoilers(true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={!spoilers}
                onChange={() => setSpoilers(false)}
              />
              No
            </label>
          </div>
        </div>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;



