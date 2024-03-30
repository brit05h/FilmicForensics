import React from "react";
import "./App.css";
import "./pages/MovieReviews.css";
import Footer from "./components/Footer";
import MovieReviews from "./pages/MovieReviews";
import Header from "./components/Header";

//import Header from "./components/header_test";
//import Genre from './pages/genre';
//import Main from './pages/homeMain';
//import Oscar from './pages/oscarwin';
//import Trending from './pages/trending';

// Main Home Page Structure
function App() {
  return (
    <body className="app">
      <script
        src="https://kit.fontawesome.com/0b3addc975.js"
        crossorigin="anonymous"
      ></script>

      <Header tasteProfileOn="true" />
      <section>
        <h1>Trending Now</h1>
        <ul className="trend-now-list">
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
        </ul>
      </section>

      <section>
        <h1>Trending Reviews</h1>
        <ul className="review-list">
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </ul>
        <ul className="review-list">
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </ul>
      </section>

      <section>
        <h1>Oscars Awarded</h1>
        <ul className="oscar-list">
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
        </ul>
      </section>

      <section>
        <h1>Coming Soon</h1>
        <ul className="upcoming-release-list">
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
        </ul>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      <MovieReviews />
    </body>
  );
}

export default App;
