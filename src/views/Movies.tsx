import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as CategoriesSlice from "../store/categories/categoriesSlice";
import * as MoviesSlice from "../store/movies/moviesSlice";
import * as SearchSlice from "../store/movies/searchSlice";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Categories } from "../components/Categories";
import { MoviesList } from "../components/MovieList";

export function MoviesView() {
  const dispatch = useDispatch();

  const categories = useSelector(CategoriesSlice.categories);
  const currentCategory = useSelector(MoviesSlice.currentCategory);
  const movies = useSelector(MoviesSlice.filteredMovies);
  const searchValue = useSelector(SearchSlice.searchQuery);

  useEffect(() => {
    dispatch(MoviesSlice.fetchMovies());
    dispatch(CategoriesSlice.fetchCategories());
    dispatch(MoviesSlice.fetchGenres());
  }, [dispatch])

  const onCategoryClicked = useCallback((categoryName: string) => {
    if (!categoryName || categoryName.trim() === '') return;
    dispatch(MoviesSlice.setCurrentCategory(categoryName));
  }, [dispatch]);

  const onSearchQueryChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;    
    dispatch(SearchSlice.search(e.target.value));
  }, [dispatch]);

  return (
    <>
      <Header
        searchValue={searchValue}
        onSearchInputChanged={onSearchQueryChanged}
      />
      <section className="wrapper">
        <Categories
          categories={categories}
          activeCategory={currentCategory}
          onCategoryClicked={onCategoryClicked}
        />
        <MoviesList
          movies={movies}
        />
      </section>
      <Footer />
    </>
  );
}
