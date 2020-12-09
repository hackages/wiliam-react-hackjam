import { createAction, createReducer } from '@reduxjs/toolkit';

export const setCurrentCategory = createAction('SET_CURRENT_CATEGORY');

export const categoriesReducer = createReducer({}, (builder) => {
  builder
    .addCase(setCurrentCategory, (state, action) => {

    })
    .addDefaultCase((state, action) => { });
});
