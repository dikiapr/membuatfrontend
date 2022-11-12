import React, { useEffect, useState } from "react";
import MovieCards from "./components/MovieCards";
import NavigationBar from "./components/NavigationBar";

const FEATURE_API = "https://api.themoviedb.org/3/movie/popular?api_key=2822e08ab9a03f0baadfab8ea07ff27c";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=2822e08ab9a03f0baadfab8ea07ff27c&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURE_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <NavigationBar handleOnSubmit={handleOnSubmit} searchTerm={searchTerm} handleOnChange={handleOnChange} />
      {movies.length > 0 ? (
        <div className="container">
          <div className="grid">
            {movies.map((movie) => (
              <MovieCards key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      ) : (
        <h2> Movie Not Found</h2>
      )}
    </div>
  );
};

export default App;
