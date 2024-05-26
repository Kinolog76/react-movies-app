import axios from "axios";

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWQxZmVhNGM5MTcyMGZlOTc2YmQ3OWFlNGU3NTBlNiIsInN1YiI6IjY2MmE5OWVmZThkMGI0MDExZTEwZjgxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNMS2vbjREUq4cLoA6yYA99hYM6Nn__ecKZNwG7eMjA";
const API_URL = "https://api.themoviedb.org/3/";

//* Детали фильма
async function getMovieDetails(movieId) {
  const options = {
    method: "GET",
    url: `${API_URL}movie/${movieId}`,
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("getMovieDetails", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//* Трийлеры для фильма
async function getMovieVideos(movieId) {
  const options = {
    method: "GET",
    url: `${API_URL}movie/${movieId}/videos`,
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("getMovieVideos", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//* Сейчас показывают
async function getNowPlayingMovies(page = 1) {
  const options = {
    method: "GET",
    url: `${API_URL}movie/now_playing`,
    params: { language: "en", page: page.toString() },
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("getNowPlayingMovies", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//* Популярные фильмы
async function getPopularMovies(page = 1) {
  const options = {
    method: "GET",
    url: `${API_URL}movie/popular`,
    params: { language: "en", page: page.toString() },
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("getPopularMovies", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//* Топ рейтинга
async function getTopRatedMovies(page = 1) {
  const options = {
    method: "GET",
    url: `${API_URL}movie/top_rated`,
    params: { language: "en", page: page.toString() },
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//* Предстоящие фильмы
async function getUpcomingMovies(page = 1) {
  const options = {
    method: "GET",
    url: `${API_URL}movie/upcoming`,
    params: { language: "en", page: page.toString() },
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//* Жанр фильмов
async function getGenresMovies(id, page = 1) {
  const options = {
    method: "GET",
    url: `${API_URL}discover/movie`,
    params: { with_genres: id.toString(), page: page.toString() },
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("getGenresMovies", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export {
  getMovieDetails,
  getMovieVideos,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getGenresMovies,
};
