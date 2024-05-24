import axios from "axios";

async function getUpcomingMovies( page = 1) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming",
    params: { language: "en", page: page.toString() },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWQxZmVhNGM5MTcyMGZlOTc2YmQ3OWFlNGU3NTBlNiIsInN1YiI6IjY2MmE5OWVmZThkMGI0MDExZTEwZjgxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNMS2vbjREUq4cLoA6yYA99hYM6Nn__ecKZNwG7eMjA",
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

export default getUpcomingMovies;
