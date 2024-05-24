import React from "react";
import { Link } from "react-router-dom";
import { API_IMAGE_BASE_URL } from "/config/constants";
import placeholder from "../../assets/images/no-movie.png";
import styles from "./MovieCard.module.css";

const MovieCard = React.memo(({ movie }) => {
  const IMAGE_LINK = getImageLink(movie.poster_path);
  function getImageLink(imagePath) {
    if (imagePath) {
      return API_IMAGE_BASE_URL + imagePath.replace("/", "");
    } else {
      return placeholder;
    }
  }
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
