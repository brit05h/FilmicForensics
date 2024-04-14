import React, { useState, useEffect } from "react";
import "./Search.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { result } from "lodash";
// --url 'https://api.themoviedb.org/3/search/movie?query=baby&include_adult=false&language=en-US&page=1' \

function Search() {
  const [inputdata, setInputdata] = useState("");
  const [movieList, setTrendingList] = useState([]);

  const fetchData = (value) => {
    console.log(value);
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=d98b6a4a470bc2415959e8cfff5c445e&query=" +
        value +
        "&include_adult=false&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTrendingList(json.results);
      });
  };

  const handleChange = (value) => {
    setInputdata(value);
    fetchData(value);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleMouseEnter = (index) => {
    const trend_image = document.getElementById(`trend_image_${index}`);
    const rectangle = document.getElementById(`rectangle_${index}`);
    if (trend_image && rectangle) {
      trend_image.style.transform = "scale(1.05)"; // Enlarge by 5%
      rectangle.style.opacity = 1; // Show rectangle
    }
  };

  const handleMouseLeave = (index) => {
    const trend_image = document.getElementById(`trend_image_${index}`);
    const rectangle = document.getElementById(`rectangle_${index}`);
    if (trend_image && rectangle) {
      trend_image.style.transform = "scale(1)"; // Restore original size
      rectangle.style.opacity = 0; // Hide rectangle
    }
  };

  return (
    <body className="app">
      <Header tasteProfileOn="true" />
      <div class="page">
        <div class="search-box">
          <input
            type="text"
            name="criteria"
            placeholder="Search for movies"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div style={{ backgroundColor: "#22092C" }}>
          {movieList.map((movie, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                display: "inline-block",
                justifyContent: "center",
              }}
            >
              <img
                className="array"
                id={`trend_image_${index}`}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
              <div id={`rectangle_${index}`} className="info">
                <h2
                  style={{
                    color: "white",
                    marginTop: "15px",
                    marginBottom: "0px",
                  }}
                >
                  {movie.title || movie.name}{" "}
                </h2>

                <p style={{ color: "white", marginTop: "5px" }}>
                  {movie.overview && movie.overview.length > 300
                    ? `${movie.overview.substring(0, 300)}...`
                    : movie.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default Search;
