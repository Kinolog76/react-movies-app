function MovieCard(props) {
  const imageUrlBase = "https://image.tmdb.org/t/p/original/";
  const ratingMovie = props.dataFilm.vote_average.toFixed(1)

  return (
    <div
      key={props.dataFilm.id}
      data-popularity={props.dataFilm.popularity}
      className="relative group cursor-pointer card bg-slate-200 flex flex-col hover:shadow-lg hover:shadow-slate-100 transition-all shadow-md shadow-slate-100 border border-black rounded-2xl text-center py-9 px-5"
    >
      <span className={`rating absolute flex justify-center border-2 shadow-lg shadow-black border-orange-500 items-center w-12 h-12 pb-1 z-10 top-2 right-2 rounded-full text-black font-semibold text-2xl ${ratingMovie >= 8 ? 'bg-green-600' : ratingMovie >= 5 ? 'bg-yellow-400' : 'bg-red-600'}`}>{props.dataFilm.vote_average.toFixed(1)}
      </span>
      <div className="overflow-hidden w-full  mb-3 aspect-video rounded-3xl relative">
        <img
          className="absolute top-0 left-0 card-image block mx-auto rounded-3xl group-hover:scale-105 transition-all "
          fetchpriority="high"
          src={imageUrlBase + props.dataFilm.backdrop_path}
          alt={props.dataFilm.title}
        />
      </div>
      <h2 className="font-bold text-3xl mb-2 card-title ">
        <span className="group-hover:text-red-500 transition-all">
          {props.dataFilm.title} <span className="text-2xl">({props.dataFilm.release_date.slice(0, 4)})</span>
        </span>
      </h2>
      <p className="max-h-28 overflow-hidden mt-auto card-text text-lg text-gray-700 mb-6">{props.dataFilm.overview}</p>
    </div>
  );
}

export default MovieCard;
