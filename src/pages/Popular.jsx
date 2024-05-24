import { useEffect, useState, useRef } from "react";
import getPopularMovies from "../services/popularMovie.service";
import MovieCard from "../components/MovieCard";
import Skeleton from "../components/MovieCard/Skeleton";

function Popular() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const loader = useRef(null);
  console.log(isLoading);

  const toNextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          toNextPage();
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      },
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader.current]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getPopularMovies(page);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchMovies();
  }, [page]);
  console.log(isLoading);
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

export default Popular;
