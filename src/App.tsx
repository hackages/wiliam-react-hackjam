import React, { useCallback, useState } from "react";

import { ICategory, IGenre, IMovie } from "./types";
import { isMovieTitleContain, isMovieBelongsToCategory } from "./utils";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Categories } from "./components/Categories";

interface AppProps {
  categories: ICategory[],
  movies: IMovie[],
  genres: IGenre[],
}

export function App({ categories, genres, movies }: AppProps) {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const testMovieBelongsToCategory = isMovieBelongsToCategory(genres);

  const onSearchQueryChanged = useCallback((searchTerms: string) => {
    setFilteredMovies(movies.filter(movie => isMovieTitleContain(movie, searchTerms)));
  }, [movies]);

  const onCurrentCategoryChanged = useCallback((categoryName: string) => {
    setFilteredMovies(movies.filter(movie => testMovieBelongsToCategory(movie, categoryName)));
  }, [movies, setFilteredMovies, testMovieBelongsToCategory]);
  
  return (
      <>
        <Header searchCallback={onSearchQueryChanged} />

        <section className="wrapper">
          <Categories
            categories={categories}
            categoriesCallback={onCurrentCategoryChanged}
          />

          {/* Start: MovieList Component */}
          <div className="movie-list py-20">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
              {filteredMovies.map(movie => (
                  <div key={movie.id} className="single-movie relative">
                    <img src={movie.poster_path} alt={movie.title} />
                    <div className="movie-content flex items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                      <div className="content-inner">
                        <h3 className="mb-5">{movie.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* End: MovieList Component */}
        </section>

        <Footer />
      </>
  );
}
