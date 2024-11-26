// MovieList.js
import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./movie.css";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Titre: "Inception",
      Description: "Un voleur qui s'infiltre dans les rêves pour voler des secrets. Il est chargé d'accomplir l'impossible : implanter une idée dans l'esprit d'un individu.",
      PosterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
      Notation: 4.8,
    },
    {
      id: 2,
      Titre: "The Dark Knight",
      Description: "Un homme condamné à tort pour meurtre. En prison, il forge une amitié avec Ellis 'Red' Redding et lutte pour sa liberté.",
      PosterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
      Notation: 4.9,
    },
  ]);

  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      Titre: "Nouveau Film",
      Description: "Une description générique pour un film.",
      PosterURL: "https://via.placeholder.com/150",
      Notation: 4.0,
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="container">
      <h1>Liste des films</h1>

      {/* Barre de recherche */}
      <div className="search-bar">
        <input type="text" placeholder="Rechercher un film" />
      </div>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Ajouter un film */}
      <button onClick={addMovie}>Ajouter un film</button>
    </div>
  );
};

export default MovieList;
