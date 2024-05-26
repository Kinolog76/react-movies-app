import { useEffect, useState } from "react";

function useFetchMovies(page, fetchDataFunction) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchDataFunction(page);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка:", error);
        setError(error);
      }
    }

    fetchMovies();
  }, [page]);

  return { movies, isLoading, error };
}

export default useFetchMovies;
