import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieVideos } from "../services/tmdb.service";
import Video from "../components/Video";
import MovieDetails from "../components/MovieDetails";

function MoviePage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);

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
        <MovieDetails movieDetails={movieDetails} />
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
