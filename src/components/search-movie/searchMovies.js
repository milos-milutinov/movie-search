import React, { useState } from "react";
import Movies from "../movies/Movies";

function SearchMovies() {
  // States
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const apiKey = "734615c29223672860bd1f564fcdbe8f";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name:{" "}
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="EXAMPLE MOVIE TO SEARCH"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Movies movie={movie} key={movie.id}></Movies>
          ))}
      </div>
    </>
  );
}

export default SearchMovies;
