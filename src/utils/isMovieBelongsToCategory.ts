import {IGenre, IMovie} from '../types';

// a category name should match a genre name
export const isMovieBelongsToCategory = (genres: IGenre[]) => (movie: IMovie, categoryName: string): boolean => false
