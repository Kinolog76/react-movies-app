import { useRef, useState, useEffect } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useFetchMovies from "../hooks/useFetchMovies";
import { getUpcomingMovies } from "../services/tmdb.service";
import InfiniteScroll from "../components/InfiniteScroll";
import MovieCard from "../components/MovieCard";
import Skeleton from "../components/MovieCard/Skeleton";

function Upcoming() {
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  function toNextPage() {
    setPage((prev) => prev + 1);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { movies, isLoading, error } = useFetchMovies(page, getUpcomingMovies);
  useInfiniteScroll(loader, toNextPage);

  const skeletons = [...new Array(16)].map((item, index) => <Skeleton key={index} />);
  const movieCards = movies.map((movie, index) => (
    <MovieCard key={movie.id + `-${index}`} movie={movie} />
  ));

  return (
    <>
      <div className="movies-list">
        {isLoading ? skeletons : movieCards}
        <InfiniteScroll loader={loader} />
      </div>
    </>
  );
}

export default Upcoming;
