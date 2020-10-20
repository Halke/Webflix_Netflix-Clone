import React from "react";
import "../styles/movieCard.css";
import { Link } from "react-router-dom";

function MovieCard(props) {
  let apiRoute = "";

  if (props.type === "tv") {
    apiRoute = `/series/${props.contentId}`;
  } else if (props.type === "movie") {
    apiRoute = `/movies/${props.contentId}`;
  } else if (props.type === "person") {
    apiRoute = `/persons/${props.contentId}`;
  }

  return (
    <div className="movie-card">
      <Link to={apiRoute}>
        <img
          className="movie-card-image"
          src={props.imageSource}
          alt={props.alt}
        />
      </Link>
    </div>
  );
}

export default MovieCard;
