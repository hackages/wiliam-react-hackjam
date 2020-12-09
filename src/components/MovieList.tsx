import React from 'react';

import { IMovie } from '../types';
import { Movie } from './Movie';

interface IMovieListProps {
  movies: IMovie[];
}

export function MoviesList({ movies }: IMovieListProps) {
  return (
    <div className="movie-list py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}