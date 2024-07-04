import axios from "axios";

const apiKey = "bda440dbfde8495ff1f329339feaab2f";
const baseUrl = "https://api.themoviedb.org/3";
export const getMoviesList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovies = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}`, {
      params: {
        api_key: apiKey,
        query : q
      }
    }
  );
  return search.data;
};
