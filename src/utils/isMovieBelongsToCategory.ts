import { IGenre, IMovie } from '../types';

// a category name should match a genre name
export const isMovieBelongsToCategory = (genres: IGenre[]) => {
  return (movie: IMovie, categoryName: string): boolean => {
    if (categoryName === 'All') {
      return true;
    }

    const movieGenres = movie.genre_ids.map(id => genres.find(genre => genre.id === id));
    const results = movieGenres.find(genre => genre?.name === categoryName);

    return results != null;
  }
}