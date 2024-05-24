import styles from "./MovieCard.module.css";
import { API_IMAGE_BASE_URL } from "/config/constants";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      key={movie.id}
      data-popularity={movie.popularity}
      className={styles.root}>
      <img
        className={styles.image}
        decoding="async"
        fetchpriority="high"
        src={API_IMAGE_BASE_URL.replace("/", "") + movie.backdrop_path}
        alt={movie.title}
      />
      <h2 className={styles.title}>{movie.title}</h2>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          {movie.overview == "" ? "No description" : movie.overview}
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;
