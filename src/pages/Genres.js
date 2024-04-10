import React, { useEffect, useState } from "react";

import "./Genres.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gienres from "../images/Gienres.jpeg.avif";

//https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=en-US&page=1&with_genres=10749

function Genres() {
  const [genreList, setGenreList] = useState([]);

  const AllGenres = () => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d98b6a4a470bc2415959e8cfff5c445e"
    )
      .then((res) => res.json())
      .then((json) => setGenreList(json.genres));
  };

  useEffect(() => {
    AllGenres();
  }, []);

  return (
    <body className="app">
      <Header tasteProfileOn="false" />
      <div class="page">
        <div class="page-title">Genres</div>
        <div>
          {genreList.map((item) => (
            <div class="genre-card">
              <img src={Gienres} />
              <div class="genre-name">
                <a href={`./MoviesGenre/${item.id}`}> {item.name} </a>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="not-sure">Not Sure?</div>
      <div class="quiz-button">
        {" "}
        <a href="./."> Take this Quiz </a>
      </div>
      <Footer />
    </body>
  );
}

export default Genres;
