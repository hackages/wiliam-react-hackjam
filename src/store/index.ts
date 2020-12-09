import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// import { categoriesReducer } from './reducers/categories/categoriesReducer';
import { moviesReducer } from './reducers/movies/moviesReducer';
// import { moviesGenresReducer } from './reducers/movies/genresReducer';
import { moviesSearchReducer } from './reducers/movies/searchReducer';

export const store = configureStore({
  reducer: {
    // categories: categoriesReducer,
    movies: moviesReducer,
    // moviesGenres: moviesGenresReducer,
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