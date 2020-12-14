import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '..';

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
export function search(searchTerms: string): AppThunk {
 return async (dispatch) => {
    try {
      dispatch(setSearchQuery(searchTerms));
    } catch (err) {
      // TODO: Tell the user something went wrong
    }
  }
}

// Selectors
export const searchQuery = (state: RootState) => state.moviesSearch.searchQuery;
