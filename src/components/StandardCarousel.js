import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Ratings from "./Ratings";

function StandardCarousel() {
  const [movieList, setMovieList] = useState([]);
  const Trending = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=d98b6a4a470bc2415959e8cfff5c445e"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    Trending();
  }, []);

  return (
    <Carousel
      autoPlay="true"
      interval="1500"
      width="100%"
      margin="100px"
      infiniteLoop="true"
    >
      {movieList.map((item) => (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt={`${item.original_title ? item.original_title : item.name}`}
          />
          <div class="movie-info">
            <p class="movie-title">
              {`${item.original_title ? item.original_title : item.name}`}
              <span>
                {" "}
                {`${yearOnly(item.release_date ? item.release_date : item.first_air_date)}`}{" "}
              </span>
            </p>
            <p class="movie-desc">{`${item.overview}`}</p>

            <Ratings val={`${item.vote_average}`}> </Ratings>

            <div class="movie-action">
              <span class="movie-play">
                <a href="./.">
                  <FontAwesomeIcon icon={faPlayCircle} /> Play Trailer
                </a>
              </span>
              <span class="movie-reviews">
                <a href="./.">
                  <FontAwesomeIcon icon={faCircleInfo} /> Reviews
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
function yearOnly(aDate) {
  return aDate.split("-")[0];
}

export default StandardCarousel;
