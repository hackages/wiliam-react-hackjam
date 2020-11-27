import React, { useCallback, useState } from "react";
import classNames from "classnames";

import { ICategory, IGenre, IMovie } from "./types";
import { isMovieTitleContain, isMovieBelongsToCategory } from "./utils";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface AppProps {
  categories: ICategory[],
  movies: IMovie[],
  genres: IGenre[],
}

export function App({ categories, genres, movies }: AppProps) {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const testMovieBelongsToCategory = isMovieBelongsToCategory(genres);

  const onSearchQueryChanged = useCallback((searchTerms: string) => {
    setFilteredMovies(movies.filter(movie => isMovieTitleContain(movie, searchTerms)));
  }, [movies]);

  const onCurrentCategoryChanged = useCallback((categoryName: string) => {
    setCurrentCategory(categoryName);
    setFilteredMovies(movies.filter(movie => testMovieBelongsToCategory(movie, categoryName)));
  }, [movies, setCurrentCategory, setFilteredMovies, testMovieBelongsToCategory]);
  
  return (
      <>
        <Header searchCallback={onSearchQueryChanged} />

        <section className="wrapper">
          {/* Start: Categories Component */}
          <div className="categories">
            <div className="container mx-auto text-center">
              <ul className="flex flex-row justify-center categories-list">
              {categories.map(category => (
                <li
                  key={category.name}
                  onClick={onCurrentCategoryChanged.bind(null, category.name)}
                >
                  <button
                    className={classNames({
                      'px-3 md:px-6 py-3 block': true,
                      active: currentCategory === category.name
                    })}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
              </ul>
            </div>
          </div>
          {/* End: Categories Component */}

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
