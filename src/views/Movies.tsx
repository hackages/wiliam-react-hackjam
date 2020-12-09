import React from "react";
import { useSelector, useStore } from "react-redux";

import { ICategory, IGenre } from "../types";
// import { isMovieBelongsToCategory } from "../utils";

import { RootState } from "../store";


import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// import { Categories } from "../components/Categories";
import { Movie } from "../components/Movie";
import { movies } from "../store/reducers/movies/moviesReducer";

// interface AppProps {
//   categories: ICategory[],
//   genres: IGenre[],
// }

export function MoviesView() {
  const moviesList = useSelector(movies);

  // const testMovieBelongsToCategory = isMovieBelongsToCategory(genres);

  // const onCurrentCategoryChanged = useCallback((categoryName: string) => {
  //   setFilteredMovies(movies.filter(movie => testMovieBelongsToCategory(movie, categoryName)));
  // }, [movies, setFilteredMovies, testMovieBelongsToCategory]);
  
  return (
    <>
      <Header />

      <section className="wrapper">
        {/* <Categories
          categories={categories}
          categoriesCallback={onCurrentCategoryChanged}
        /> */}

        {/* Start: MovieList Component */}
        <div className="movie-list py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
              {moviesList.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
          </div>
        </div>
        {/* End: MovieList Component */}
      </section>

      <Footer />
    </>
  );
}
