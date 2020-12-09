import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as MoviesSlice from "../store/movies/moviesSlice";
import * as CategoriesSlice from "../store/categories/categoriesSlice";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Categories } from "../components/Categories";
import { MoviesList } from "../components/MovieList";

export function MoviesView() {
  const dispatch = useDispatch();
  const movies = useSelector(MoviesSlice.movies);
  const categories = useSelector(CategoriesSlice.categories);
  const currentCategory = useSelector(MoviesSlice.currentCategory);
  
  const onCurrentCategoryChanged = useCallback((categoryName: string) => {
    dispatch(MoviesSlice.setCurrentCategory(categoryName));
    dispatch(MoviesSlice.filterMoviesByCategory());
  }, [dispatch]);
  
  return (
    <>
      <Header />
      <section className="wrapper">
        <Categories
          categories={categories}
          currentCategory={currentCategory}
          onCurrentCategoryChanged={onCurrentCategoryChanged}
        />
        <MoviesList
          movies={movies}
        />
      </section>
      <Footer />
    </>
  );
}
