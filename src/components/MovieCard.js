// MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.PosterURL} alt={movie.Titre} />
      <h2>{movie.Titre}</h2>
      <p>{movie.Description}</p>
      <p>
        <strong>Notation :</strong> {movie.Notation} / 5
      </p>
    </div>
  );
};

export default MovieCard;
