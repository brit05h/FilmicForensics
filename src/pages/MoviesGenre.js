import React, { useEffect, useState } from "react";

import "./MoviesGenre.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

//

function MoviesGenre(props) {
  const [genreList, setGenreList] = useState([]);

  const AllGenres = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d98b6a4a470bc2415959e8cfff5c445e&language=en-US&page=1&with_genres=${gid}`
    )
      .then((res) => res.json())
      .then((json) => setGenreList(json.results));
  };

  useEffect(() => {
    AllGenres();
  }, []);

  let { gid } = useParams();
  return (
    <body className="app">
      <Header tasteProfileOn="false" />
      <div class="page">
        <div class="page-title">Movies by Genre</div>
        <div>
          {genreList.map((item) => (
            <div class="movgenre-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={`${item.original_title ? item.original_title : item.name}`}
              />
              <div class="movgenre-name">
                <a href="./.">
                  {" "}
                  {item.original_title ? item.original_title : item.name}{" "}
                </a>
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

export default MoviesGenre;
