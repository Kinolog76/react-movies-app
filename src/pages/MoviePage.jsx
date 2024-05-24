import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieDetails from "../services/movieDetails.service";

function MoviePage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovieDetails(id);
        setMovieDetails(data);
        console.log(movieDetails)
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <div className="">
        <h1>{movieDetails.title}</h1>
      </div>
    </>
  );
}

export default MoviePage;
