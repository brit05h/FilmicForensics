import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessRook } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
//import './Header.css'; // Import the CSS file

const Header = (props) => {
  let tasteProfileElement;
  if (props.tasteProfileOn === "true") {
    tasteProfileElement = (
      <FontAwesomeIcon icon={faChessRook} className="action-icon" />
    );
  }
  return (
    <header>
      <div className="header">
        <div id="logo">Filmic Forensics</div>
        <ul className="nav">
          <li><Link to="./Home" className="nav-link">Home</Link></li>
          <li><Link to="./MovieReviews" className="nav-link">Reviews</Link></li>
          <li><Link to="./Movie" className="nav-link">Movies</Link></li>
          <li><Link to="./Home" className="nav-link">Genres</Link></li>
          <li><Link to="./TopRated" className="nav-link">New & Popular</Link></li>
          <li><Link to="./Quiz" className="nav-link">Quiz</Link></li>
        </ul>
        <div className="actions">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="action-icon" />
          {tasteProfileElement}
        </div>
      </div>
    </header>
  );
};

export default Header;
