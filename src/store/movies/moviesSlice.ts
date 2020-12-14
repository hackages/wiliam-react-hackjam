import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '..';
import { IGenre, IMovie } from '../../types';
import { movies as moviesMock, genres as genresMock } from '../../mocks';
import { isMovieTitleContain, isMovieBelongsToCategory } from '../../utils';

export interface MoviesState {
  movies: IMovie[];
  genres: IGenre[];
  currentCategory: string;
};

const initialState: MoviesState = {
  movies: [],
  genres: [],
  currentCategory: 'All',
};

// Slice creation (reducers)
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<IMovie[]>) {
      return {
        ...state,
        movies: action.payload,
      };
    },
    setGenres(state, action: PayloadAction<IGenre[]>) {
      return {
        ...state,
        genres: action.payload,
      };
    },
    setCurrentCategory(state, action: PayloadAction<string>) {
      // TODO: Validate category name.
      return {
        ...state,
        currentCategory: action.payload,
      };
    }
  }
});

// Reducer
export const moviesReducer = moviesSlice.reducer;

// Actions
export const {
  setMovies, setGenres, setCurrentCategory,
} = moviesSlice.actions;

// Async actions (thunk)
export const fetchMovies = (): AppThunk =>
  (dispatch) => dispatch(setMovies(moviesMock));

export const fetchGenres = (): AppThunk =>
  (dispatch) => dispatch(setGenres(genresMock));  

// Selectors
export const movies = (state: RootState) => state.movies.movies;
export const currentCategory = (state: RootState) => state.movies.currentCategory;

export const filteredMovies = (state: RootState) => {
  const searchQuery = state.moviesSearch.searchQuery;
  const currentCategory = state.movies.currentCategory;
  const genres = state.movies.genres;

  if (searchQuery && searchQuery !== '') {
    return state.movies.movies
      .filter(movie => isMovieTitleContain(movie, searchQuery));
  }

  return state.movies.movies
    .filter(movie => isMovieBelongsToCategory(genres)(movie, currentCategory));
}