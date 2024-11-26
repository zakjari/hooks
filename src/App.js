// App.js
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    selected: {},
  });

  const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";

  const searchInput = (e) => {
    let s = e.target.value;
    setState((prevState) => ({
      ...prevState,
      s: s,
    }));
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(apiurl + "&s=" + state.s)
        .then((response) => response.json())
        .then((data) => {
          let results = data.Search;
          setState((prevState) => ({
            ...prevState,
            results: results,
          }));
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search</h1>
      </header>
      <main>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a Movie..."
            onChange={searchInput}
            onKeyPress={search}
          />
        </div>

        <MovieList movies={state.results} />
      </main>
    </div>
  );
}

export default App;
