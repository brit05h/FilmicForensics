import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import TopRated from './pages/TopRated';
import Movie from './pages/Movie';
import Quiz from './quiz/Quiz';
import MovieReviews from './pages/MovieReviews';
import {Route, Routes} from "react-router-dom"
//import Quiz from './pages/Quiz'
//import '.pages/styling.css'
//import TVShows from './TVShows';
//import Genres from './Genres';


function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="Home" element={<Home/>}/>
          <Route path="/Movie" element={<Movie/>}/>
          <Route path="/TopRated" element={<TopRated/>}/>
          <Route path="/Movies" element={<Home/>}/>
          <Route path="/Quiz" element={<Quiz/>}/>
          <Route path="/MovieReviews" element={<MovieReviews/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App;