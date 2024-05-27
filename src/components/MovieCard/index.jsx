import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import getImageLink from "../../utils/imageLinks.helpers";

const MovieCard = React.memo(({ movie }) => {
  const IMAGE_LINK = getImageLink(movie.poster_path);
  
  return (
    <Link to={`/movie/${movie.id}`} className={`movie__card`}>
      <img
        className={`movie__card-image`}
        decoding="async"
        loading="lazy"
        src={IMAGE_LINK}
        alt={movie.title}
      />
      <div className={`movie__card-descriptionContainer`}>
        <h2 className={`movie__card-title`}>{movie.title}</h2>
        <p className={`movie__card-description`}>
          {movie.overview === "" ? "No description" : movie.overview}
        </p>
      </div>
    </Link>
  );
});

export default MovieCard;
