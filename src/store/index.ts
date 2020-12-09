import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { categoriesReducer } from './categories/categoriesSlice';
import { moviesReducer } from './movies/moviesSlice';
import { moviesSearchReducer } from './movies/searchSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    movies: moviesReducer,
    moviesSearch: moviesSearchReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;