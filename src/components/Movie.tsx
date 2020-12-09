import React from "react";
import { IMovie } from "../types";

interface IMovieProps {
  movie: IMovie;
}

export function Movie({ movie }: IMovieProps) {
  return (
    <div key={movie.id} className="single-movie relative">
      <img src={movie.poster_path} alt={movie.title} />
      <div className="movie-content flex items-center justify-center text-center absolute w-full h-full inset-0 px-4">
        <div className="content-inner">
          <h3 className="mb-5">{movie.title}</h3>
        </div>
      </div>
    </div>
  );
}
