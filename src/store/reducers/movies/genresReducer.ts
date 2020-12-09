import { createAction, createReducer } from '@reduxjs/toolkit';

export const fetchCategories = createAction('FETCH_CATEGORIES');

export const moviesGenresReducer = createReducer({}, (builder) => {
  builder
    .addCase(fetchCategories, (state, action) => {
      state = []; // TODO: add data.
    })
    .addDefaultCase((state, action) => { });
});
