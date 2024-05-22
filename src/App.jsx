import React, { useEffect, useState, useRef } from "react";
import getPopularMovies from "./services/popularMovie.service";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("ru");
  const loader = useRef(null);

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
        const data = await getPopularMovies(language, page);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      } catch (error) {
        console.error("Ошибка при загрузке популярных фильмов:", error);
      }
    }
    fetchMovies();
  }, [page, language]);

  return (
    <div>
      <Header />
      <h1>Популярные фильмы</h1>
      <div></div>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id + `-${index}`} movie={movie} />
        ))}
        <div
          ref={loader}
          style={{
            height: "0px",
            marginTop: "-500px",
            position: "relative",
            zIndex: 100,
          }}></div>
      </div>
    </div>
  );
}

export default App;
