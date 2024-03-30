import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessRook } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
//import "./Footer.css"; // Import the CSS file

const Header = (props) => {
  let tasteProfileElement;
  if (props.tasteProfileOn === "true") {
    tasteProfileElement = (
      <FontAwesomeIcon icon={faChessRook} className="action-icon" />
    );
  }
  return (
    <header>
      <div class="header">
        <div id="logo">Filmic Forensics</div>
        <ul class="nav">
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>Genres</li>
          <li>New & Popular</li>
          <li>Upcoming Releases</li>
        </ul>
        <div class="actions">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="action-icon" />
          {tasteProfileElement}
        </div>
      </div>
    </header>
  );
};

export default Header;
