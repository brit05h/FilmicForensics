import React from 'react';
import './MovieReviews.css'; // CSS file for styling

const MovieReviewsPage = () => {
    // Sample data for movie reviews
    const reviews = [
        { username: 'User1', rating: 4, review: 'Great movie!' },
        { username: 'User2', rating: 5, review: 'Awesome!' },
        // Add more reviews here
    ];

    return (
        <div className="movie-reviews-page">
            <div className="header">
                {/* Replace 'movie-poster.jpg' with the actual path to your movie poster image */}
                <div className="header-background" style={{backgroundImage: 'url(movie-poster.jpg)'}}>
                    {/* You can add any additional header content here */}
                </div>
            </div>
            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <div className="review" key={index}>
                        <div className="username">{review.username}</div>
                        <div className="rating">Rating: {review.rating} stars</div>
                        <div className="review-text">{review.review}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieReviewsPage;