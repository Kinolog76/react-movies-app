import { Link } from "react-router-dom";
import dateFormate from "../../utils/dateFormate.helpers";
import getImageLink from "../../utils/imageLinks.helpers";
import style from "./MovieDetails.module.css";

function MovieDetails({ movieDetails }) {
  const IMAGE_LINK = getImageLink(movieDetails.poster_path);
  const newDateFormate = dateFormate(movieDetails.release_date);
  
  return (
    <div className={style.movie__details_box}>
      <div className={style.movie__poster_box}>
        <img className={style.movie__poster} src={IMAGE_LINK} alt={movieDetails.title} />
      </div>
      <div className={style.movie__details}>
        <h1 className={style.movie__title}>{movieDetails.title}</h1>
        <div className={style.movie__rating}>
          <span>Rating:</span>{" "}
          <b>{movieDetails.vote_average && movieDetails.vote_average.toFixed(1)}</b>
        </div>
        <div className={style.movie__runtime}>
          <span>Runtime:</span> <b>{movieDetails.runtime}</b>
        </div>
        <div className={style.movie__released}>
          <span>Release Date:</span> <b>{newDateFormate}</b>
        </div>
        <div className={style.movie__genres}>
          <span>Genres:</span>
          {movieDetails.genres &&
            movieDetails.genres.map((genre) => (
              <Link key={genre.id} to={`/genre/${genre.id}`}>
                <span>{genre.name}</span>
              </Link>
            ))}
        </div>
        <p className={style.movie__overview}>{movieDetails.overview}</p>
        <div className={style.movie__production_companies}>
          <span>Production Companies:</span>
          {movieDetails.production_companies &&
            movieDetails.production_companies.map((company) => (
              <p key={company.id}>{company.name}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
