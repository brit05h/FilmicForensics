import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import "./Ratings.css";

const Ratings = (props) => {
  let starRating = (parseFloat(props.val) / 10) * 5;

  let numFullStars = Math.floor(starRating);
  let numHalfStars = starRating - numFullStars > 0 ? 1 : 0;
  let numEmptyStars = 5 - (numFullStars + numHalfStars);

  let starSAraay = [];
  for (let i = 0; i < numFullStars; i++) {
    starSAraay.push(<FontAwesomeIcon icon={faStarFull} className="icon" />);
  }
  for (let i = 0; i < numHalfStars; i++) {
    starSAraay.push(
      <FontAwesomeIcon icon={faStarHalfStroke} className="icon" />
    );
  }
  for (let i = 0; i < numEmptyStars; i++) {
    starSAraay.push(<FontAwesomeIcon icon={faStar} className="icon" />);
  }

  return <div>{starSAraay}</div>;
};

export default Ratings;
