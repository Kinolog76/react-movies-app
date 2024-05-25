import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_IMAGE_BASE_URL } from "../../config/constants";
import placeholder from "../assets/images/no-movie.png";
import getMovieVideos from "../services/movieVideos.service";
import getMovieDetails from "../services/movieDetails.service";
import Video from "../components/Video";

function MoviePage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const IMAGE_LINK = getImageLink(movieDetails.poster_path);

  function getImageLink(imagePath) {
    if (imagePath) {
      return API_IMAGE_BASE_URL + imagePath.replace("/", "");
    } else {
      return placeholder;
    }
  }

  let newDateFormate = new Date(movieDetails.release_date);
  newDateFormate = newDateFormate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const firstVideoKey = movieVideos.length > 0 ? movieVideos[0].key : null;
  const videoUrl = firstVideoKey ? `https://www.youtube.com/watch?v=${firstVideoKey}` : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchMovies() {
      try {
        const data = await getMovieDetails(id);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    async function fetchMovieVideos() {
      try {
        const data = await getMovieVideos(id);
        setMovieVideos(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchMovies();
    fetchMovieVideos();
  }, []);

  return (
    <>
      <div className="movie">
        <div className="movie__details_box">
          <div className="movie__poster_box">
            <img className="movie__poster" src={IMAGE_LINK} alt={movieDetails.title} />
          </div>
          <div className="movie__details">
            <h1 className="movie__title">{movieDetails.title}</h1>
            <div className="movie__rating">
              <span>Rating:</span>{" "}
              <b>{movieDetails.vote_average && movieDetails.vote_average.toFixed(1)}</b>
            </div>
            <div className="movie__runtime">
              <span>Runtime:</span> <b>{movieDetails.runtime}</b>
            </div>
            <div className="movie__released">
              <span>Release Date:</span> <b>{newDateFormate}</b>
            </div>
            <div className="movie__genres">
              <span>Genres:</span>
              {movieDetails.genres &&
                movieDetails.genres.map((genre) => (
                  <Link key={genre.id} to={`/genre/${genre.id}`}>
                    <span>{genre.name}</span>
                  </Link>
                ))}
            </div>
            <p className="movie__overview">{movieDetails.overview}</p>
            <div className="movie__production_companies">
              <span>Production Companies:</span>
              {movieDetails.production_companies &&
                movieDetails.production_companies.map((company) => (
                  <p key={company.id}>{company.name}</p>
                ))}
            </div>
          </div>
        </div>
        <div className="movie__videos">
          <h2 className="movie__videos_title">Videos</h2>
          <div className="movie__videos_box">
            {movieVideos.slice(0, 3).map((video) => (
              <Video key={video.id} videos={video} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
