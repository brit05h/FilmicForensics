import React from "react";
import { TbChefHat } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
//import "./Footer.css"; // Import the CSS file


const Header = (props) => {
  let tasteProfileElement;
  if (props.tasteProfileOn === "true") {
    tasteProfileElement = <TbChefHat className="action-icon" />;
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
          <IoSearch className="action-icon" />
          {tasteProfileElement}
        </div>
      </div>
    </header>
  );
};

export default Header;
