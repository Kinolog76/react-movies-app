import axios from "axios";

class MovieService {
  async getMovies(page = 1) {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en", page: page.toString() },
      headers: {
        accept: "application/json",
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${process.env.REACT_APP_VAR}`,
      },
    };
    try {
      const { data } = await axios(options);
      return data;
    } catch (error) {
      console.error("Ошибка при запросе к API:", error);
      throw error;
    }
  }
}

export const movieService = new MovieService();