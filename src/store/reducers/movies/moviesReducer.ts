import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../../';
import { movies } from '../../../mocks';
import { IMovie } from '../../../types';
import { isMovieTitleContain } from '../../../utils';


export interface IFetchMoviesAction {
  page: number;
}

const initialState: IMovie[] = movies;

// Slice creation (reducers)
const moviesSearchSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<IMovie[]>) {
      state = action.payload;
      // action.payload.page;
    }
  }
});

// Actions
export const { setMovies } = moviesSearchSlice.actions;
export const moviesReducer = moviesSearchSlice.reducer;

// Async actions (thunk)
export const fetchMovies = (): AppThunk =>
  async (dispatch, getState) => {
    try {
      const state = getState();

      const searchQuery = state.moviesSearch.searchQuery;
      // const genre = state.moviesGenres

      // TODO: Use better algorithm
      const filteredMovies = state.movies
        .filter((movie) => isMovieTitleContain(movie, searchQuery));

      // TODO: In the future this can fetch from API.
      dispatch(setMovies(filteredMovies));
    } catch (err) {
      // TODO: Tell the user something went wrong
      console.error(err);
    }
  }