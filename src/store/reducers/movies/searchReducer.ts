import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../../';

import { fetchMovies } from './moviesReducer';

export interface MoviesSearchState {
  searchQuery: string;
};

const initialState: MoviesSearchState = {
  searchQuery: '',
};

// Slice creation (reducers)
const moviesSearchSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  }
});

// Actions
export const { setSearchQuery } = moviesSearchSlice.actions;
export const moviesSearchReducer = moviesSearchSlice.reducer;

// Async actions (thunk)
export const search = (searchTerms: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setSearchQuery(searchTerms));
      // dispatch(fetchMovies());

      // TODO: 
      // If search terms in state.movies:
      //   Call action to filter movies
      // Else:
      //   Display "Woops no results"

    } catch (err) {
      // TODO: Tell the user something went wrong
    }
  }

// Selectors
export const searchQuery = (state: RootState) => state.moviesSearch.searchQuery;