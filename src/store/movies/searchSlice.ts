import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '..';
import * as MoviesSlice from './moviesSlice';

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
      return {
        ...state,
        searchQuery: action.payload,
      };
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
      dispatch(MoviesSlice.filterMoviesBySearchTerms());

      if (searchTerms.trim() === '') {
        dispatch(MoviesSlice.filterMoviesByCategory());
      }

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