import React from "react";
import {ICategory, IMovie} from './types';

interface AppProps {
  categories: ICategory[],
  movies: IMovie[],
}

export function App({ categories, movies }: AppProps) {
  return (
      <>
        {/* Start: Header Component */}
        <header className="py-10">
          <div className="container mx-auto">
            <div className="sm:flex items-center justify-between">
              <a
                  href="/"
                  className="logo lg:w-1/2 sm:w-1/4 w-full block mb-5 sm:mb-0"
              >
                <img
                    className="mx-auto sm:mx-0"
                    src="./image/logo.svg"
                    alt="hackflix"
                />
              </a>
              <div className="flex justify-center sm:justify-end items-center text-right lg:w-1/2 sm:w-3/4 w-full">
                {/* Start: Search Component */}
                <form className="flex mr-5 lg:mr-10">
                  <input
                      role={'search'}
                      type="text"
                      name="Search"
                      placeholder="Search"
                      className="search"
                      onChange={() => {}}
                  />
                  <button type="submit" className="search-btn">
                    <img src="./image/search.svg" alt="search" />
                  </button>
                </form>
                {/* End: Search Component */}

                <div className="nav">
                  <a href="/bookmarks" className="bookmark-nav py-3 mr-5">
                    Bookmarks
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End: Header Component */}

        <section className="wrapper">
          {/* Start: Categories Component */}
          <div className="categories">
            <div className="container mx-auto text-center">
              <ul className="flex flex-row justify-center categories-list">
                {/* Start: Category */}
                <li key={'category-1'} onClick={() => {}}>
                <button className={'px-3 md:px-6 py-3 block'}>
                  Category
                </button>
                </li>
                {/* End: Category */}
                {/* Start: Category */}
                <li key={'category-2'} onClick={() => {}}>
                <button className={'px-3 md:px-6 py-3 block'}>
                  Category
                </button>
                </li>
                {/* End: Category */}
                {/* Start: Category */}
                <li key={'category-3'} onClick={() => {}}>
                <button className={'px-3 md:px-6 py-3 block'}>
                  Category
                </button>
                </li>
                {/* End: Category */}
                {/* Start: Category */}
                <li key={'category-4'} onClick={() => {}}>
                <button className={'px-3 md:px-6 py-3 block'}>
                  Category
                </button>
                </li>
                {/* End: Category */}
              </ul>
            </div>
          </div>
          {/* End: Categories Component */}

          {/* Start: MovieList Component */}
          <div className="movie-list py-20">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                {movies.map(movie => (
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

        {/* Start: Footer Component */}
        <footer className="py-6 bg-gray-900">
          <div className="container mx-auto text-center">
            <p>Hackflix © 2020 Powered by Hackages</p>
          </div>
        </footer>
        {/* End: Footer Component */}
      </>
  );
}
