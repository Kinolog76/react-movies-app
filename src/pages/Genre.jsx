import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { getGenresMovies } from "../services/tmdb.service";
import MovieCard from "../components/MovieCard";
import Skeleton from "../components/MovieCard/Skeleton";

function GenresMovies() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const loader = useRef(null);

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
  useInfiniteScroll(loader, toNextPage);

  const skeletons = [...new Array(16)].map((item, index) => <Skeleton key={index} />);
  const movieCards = movies.map((movie, index) => (
    <MovieCard key={movie.id + `-${index}`} movie={movie} />
  ));

  return (
    <>
      <div className="movies-list">
        {isLoading ? skeletons : movieCards}
        <div
          ref={loader}
          style={{
            height: "0px",
            marginTop: "-500px",
            position: "relative",
            zIndex: 100,
          }}></div>
      </div>
    </>
  );
}

export default GenresMovies;
