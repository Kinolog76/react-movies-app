import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import { getGenresMovies } from "../services/tmdb.service";
import MovieCard from "../components/MovieCard";
import Skeleton from "../components/MovieCard/Skeleton";

function GenresMovies() {
  const { id } = useParams();
  const [page, setPage] = useState(1);


  function fetchDataFunction(page) {
    return getGenresMovies(id, page);
  }
  function toNextPage() {
    setPage((prev) => prev + 1);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { movies, isLoading, error } = useFetchMovies(page, fetchDataFunction);

  const skeletons = [...new Array(16)].map((item, index) => <Skeleton key={index} />);
  const movieCards = movies.map((movie, index) => (
    <MovieCard key={movie.id + `-${index}`} movie={movie} />
  ));

  return (
    <>
      <div className="movies-list">{isLoading ? skeletons : movieCards}</div>
      <button className="load-more__btn" onClick={toNextPage}>Load more</button>
    </>
  );
}

export default GenresMovies;
