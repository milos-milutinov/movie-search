import "./App.css";
import SearchMovies from "./components/search-movie/searchMovies";

import React from "react";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies></SearchMovies>
    </div>
  );
}

export default App;
