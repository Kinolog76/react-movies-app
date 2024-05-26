import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import getImageLink from "../../utils/imageLinks.helpers";

const MovieCard = React.memo(({ movie }) => {
  const IMAGE_LINK = getImageLink(movie.poster_path);
  
  return (
    <Link to={`/movie/${movie.id}`} className={styles.root}>
      <img
        className={styles.image}
        decoding="async"
        fetchpriority="high"
        src={IMAGE_LINK}
        alt={movie.title}
      />
      <div className={styles.descriptionContainer}>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.description}>
          {movie.overview === "" ? "No description" : movie.overview}
        </p>
      </div>
    </Link>
  );
});

export default MovieCard;
