import { useState } from "react";
import { movieService } from "../services/movies.service";
import { useQuery } from "@tanstack/react-query";

function MovieCard() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => movieService.getMovies(page),
  });
  const imageUrlBase = "https://image.tmdb.org/t/p/original/";
  const [value, setFilter] = useState("");

  const handlePrevPage = () => {
    page > 1 ? setPage((prev) => prev - 1) : null;
    refetch();
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    refetch();
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  if (isLoading)
    return (
      <>
        <h1 className="mx-5 mt-2 font-bold text-5xl text-white">Popular movies</h1>
        <div className="h-full w-full flex justify-center items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-14 h-14 sm:h-28 sm:w-28 animate-spin">
            <path
              fillRule="evenodd"
              d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  const films = data?.results || [];
  const filteredData = films.filter((film) => film.title.toLowerCase().includes(value));
  return (
    <>
      <div className="flex justify-between items-center mx-5 mt-2">
        <h1 className=" font-bold text-5xl text-white">Popular movies</h1>
        <div className="flex justify-center">
          <button onClick={handlePrevPage} disabled={page === 1} className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded mr-5">
            Prev
          </button>
          <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <input value={value} onChange={handleFilterChange} type="text" placeholder="Search by name..." className="w-full h-10 m-4 p-2 shadow-lg focus:shadow-purple-900 rounded-md" />
      </div>
      <h2 className="mx-5 font-bold text-4xl text-white">{value === "" ? "Your search results will appear here" : "Your search results: " + value}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 flex-wrap">
        {filteredData.map((film) => (
          <div
            key={film.id}
            className="relative group cursor-pointer card bg-slate-200 flex flex-col hover:shadow-lg hover:shadow-slate-100 transition-all shadow-md shadow-slate-100 border border-black rounded-2xl text-center py-9 px-5"
          >
            <span className="absolute top-2 right-3 font-bold">{film.release_date.slice(0, 4)}</span>
            <img className="card-image block mx-auto mb-3 rounded-3xl" fetchpriority="high" src={imageUrlBase + film.backdrop_path} alt={film.title} />
            <h2 className="font-bold text-3xl mb-2 card-title ">
              <span className="group-hover:text-red-500 transition-all">{film.title}</span>
            </h2>
            <p className="max-h-28 overflow-hidden mt-auto card-text text-lg text-gray-700 mb-6">{film.overview}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCard;
