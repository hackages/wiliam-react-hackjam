import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppThunk, RootState } from '..';
import { ICategory } from '../../types';
import { categories as categoriesMock } from '../../mocks/categories';

export interface CategoriesState {
  categories: ICategory[];
};

const initialState: CategoriesState = {
  categories: [],
};

// Slice creation (reducers)
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<ICategory[]>) {
      return {
        ...state,
        categories: action.payload,
      };
    },
  },
});

// Actions
export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

// Action creators
export const fetchCategories = (): AppThunk =>
  (dispatch) => dispatch(setCategories(categoriesMock));

// Selectors
export const categories = (state: RootState) => state.categories.categories;