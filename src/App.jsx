import React, { useEffect, useState } from "react";
import getPopularMovies from "./services/popularMovie.service";
import MovieCard from "./components/MovieCard";
import SelectLanguage from "./components/SelectLanguage";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("ru");

  const toNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const toPrevPage = () => {
    page > 1 ? setPage((prev) => prev - 1) : null;
  };

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
    console.log("language", language);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getPopularMovies(language, page);
        setMovies(data.results);
      } catch (error) {
        console.error("Ошибка при загрузке популярных фильмов:", error);
      }
    }
    fetchMovies();
  }, [page, language]);

  return (
    <div>
      <h1>Популярные фильмы</h1>
      <div>
        <SelectLanguage />
      </div>
      <div>
        <button onClick={toPrevPage}>Prev page</button>
        <button onClick={toNextPage}>Next page</button>
      </div>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
