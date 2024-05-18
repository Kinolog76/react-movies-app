import styles from "./MovieCard.module.css";
import { API_IMAGE_BASE_URL } from "/config/constants";

function MovieCard({ movie }) {
  const ratingMovie = movie.vote_average;

  return (
    <a href={`/movie/${movie.id}`} key={movie.id} data-popularity={movie.popularity} className={styles.root}>
      <span
        className={`${styles.rating} ${
          ratingMovie >= 8 ? styles.green : ratingMovie >= 5 ? styles.yellow : styles.red
        }`}>
        {movie.vote_average.toFixed(1)}
      </span>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          decoding="async"
          fetchpriority="high"
          src={API_IMAGE_BASE_URL + movie.backdrop_path.replace("/", "")}
          alt={movie.title}
        />
      </div>
      <h2 className={styles.title}>
        <p>
          {movie.title} <span>({movie.release_date.slice(0, 4)})</span>
        </p>
      </h2>
      <p className={styles.description}>{movie.overview}</p>
    </a>
  );
}

export default MovieCard;
