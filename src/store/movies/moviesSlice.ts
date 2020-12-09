import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '..';
import { movies as moviesMock, genres as genresMock } from '../../mocks';
import { IGenre, IMovie } from '../../types';
import { isMovieTitleContain, isMovieBelongsToCategory } from '../../utils';

export interface MoviesState {
  movies: IMovie[];
  genres: IGenre[];
  currentCategory: string;
}

const initialState: MoviesState = {
  movies: moviesMock,
  genres: genresMock,
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
export const fetchGenres = (): AppThunk =>
  (dispatch) => dispatch(setGenres(genresMock));

export const filterMoviesBySearchTerms = (): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      
      const searchQuery = state.moviesSearch.searchQuery;
      const filteredMovies = moviesMock
        .filter(movie => isMovieTitleContain(movie, searchQuery));

      // TODO: In the future this can fetch from API.
      dispatch(setMovies(filteredMovies));
    } catch (err) {
      // TODO: Tell the user something went wrong
      console.error(err);
    }
  }
};

export const filterMoviesByCategory = (): AppThunk => {
  return (dispatch, getState) => {
    try {

      const state = getState();
      
      const currentCategory = state.movies.currentCategory;
      const genres = state.movies.genres;
      
      const filteredMovies = moviesMock
      .filter(movie => isMovieBelongsToCategory(genres)(movie, currentCategory));
      
      dispatch(setMovies(filteredMovies));
    } catch (err) {
      // TODO: Tell the user something went wrong
    }
  };
};

// Selectors
export const movies = (state: RootState) => state.movies.movies;
export const currentCategory = (state: RootState) => state.movies.currentCategory;