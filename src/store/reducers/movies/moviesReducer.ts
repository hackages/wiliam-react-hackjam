import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../../';
import { movies as moviesMock } from '../../../mocks';
import { IMovie } from '../../../types';
import { isMovieTitleContain } from '../../../utils';

export interface MoviesState {
  movies: IMovie[];
}

export interface IFetchMoviesAction {
  page: number;
}

const initialState: MoviesState = {
  movies: moviesMock,
};

// Slice creation (reducers)
const moviesSearchSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<IMovie[]>) {
      state.movies = action.payload;
      console.log('got this in reducer:', action.payload)
      // action.payload.page;
    }
  }
});

// Actions
export const { setMovies } = moviesSearchSlice.actions;
export const moviesReducer = moviesSearchSlice.reducer;

// Async actions (thunk)
export const fetchMovies = (): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const state = getState();

      const searchQuery = state.moviesSearch.searchQuery;
      // const genre = state.moviesGenres

      // TODO: Use better algorithm
      const filteredMovies = moviesMock
        .filter((movie) => isMovieTitleContain(movie, searchQuery));
      
      // TODO: Also filter based on genre selectionned

      // TODO: In the future this can fetch from API.
      dispatch(setMovies(filteredMovies));
    } catch (err) {
      // TODO: Tell the user something went wrong
      console.error(err);
    }
  }
};

export const movies = (state: RootState) => state.movies.movies;