  import "./index.css";
  import { getMoviesList, searchMovies } from "./api";
  import { useEffect, useState } from "react";

  const App = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
      getMoviesList().then((result) => {
        setPopularMovies(result);
      });
    }, []);

    const popularMoviesList = () => {
      return popularMovies.map((movie, i) => {
        return (
          <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="title text-lg font-semibold mb-2">{movie.title}</div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="image"
              className="w-full h-48 object-cover rounded mb-2"
            />
            <div className="date text-gray-500 text-sm mb-1">{movie.release_date}</div>
            <div className="rate text-yellow-500 font-bold">{movie.vote_average}</div>
          </div>
        );
      });
    };
    

    const search = async(q) => {
      if(q.length > 3) {
        const query = await searchMovies(q)
        setPopularMovies(query.results)
        console.log({ query: query })
      }
    };
    return (
      <>
        <div className="w-full max-w-7xl mx-auto p-4">
          <input
            type="text"
            placeholder="Search..."
            onChange={({ target }) => search(target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularMoviesList()}
          </div>
        </div>
      </>
    );
  };

  export default App;
