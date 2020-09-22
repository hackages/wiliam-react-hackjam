import React from "react";
import {ICategory, IMovie} from './types';

interface AppProps {
  categories: ICategory[],
  movies: IMovie[],
}

export function App({categories, movies}: AppProps) {
  return (
      <>
        {/* Start: Header Component */}
        <header class="py-10">
          <div class="container mx-auto">
            <div class="sm:flex items-center justify-between">
              <a
                  href="/"
                  class="logo lg:w-1/2 sm:w-1/4 w-full block mb-5 sm:mb-0"
              >
                <img
                    class="mx-auto sm:mx-0"
                    src="./image/logo.svg"
                    alt="hackflix"
                />
              </a>
              <div class="flex justify-center sm:justify-end items-center text-right lg:w-1/2 sm:w-3/4 w-full">
                {/* Start: Search Component */}
                <form class="flex mr-5 lg:mr-10">
                  <input
                      role={'search'}
                      type="text"
                      name="Search"
                      placeholder="Search"
                      class="search"
                      onChange={() => {}}
                  />
                  <button type="submit" class="search-btn">
                    <img src="./image/search.svg" alt="search" />
                  </button>
                </form>
                {/* End: Search Component */}

                <div class="nav">
                  <a href="/bookmarks" class="bookmark-nav py-3 mr-5">
                    Bookmarks
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End: Header Component */}

        <section class="wrapper">
          {/* Start: Categories Component */}
          <div class="categories">
            <div class="container mx-auto text-center">
              <ul class="flex flex-row justify-center categories-list">
                {/* Start: Category */}
                <li key={'category-1'} onClick={() => {}}>
                <button class={'px-3 md:px-6 py-3 block'}>
                  Category
                </button>
                </li>
                {/* End: Category */}
                {/* Start: Category */}
                <li key={'category-2'} onClick={() => {}}>
                <button class={'px-3 md:px-6 py-3 block'}>
                  Category
                </button>
                </li>
                {/* End: Category */}
                {/* Start: Category */}
                <li key={'category-3'} onClick={() => {}}>
                <button class={'px-3 md:px-6 py-3 block'}>
                  Category
                </button>
                </li>
                {/* End: Category */}
                {/* Start: Category */}
                <li key={'category-4'} onClick={() => {}}>
                <button class={'px-3 md:px-6 py-3 block'}>
                  Category
                </button>
                </li>
                {/* End: Category */}
              </ul>
            </div>
          </div>
          {/* End: Categories Component */}

          {/* Start: MovieList Component */}
          <div class="movie-list py-20">
            <div class="container mx-auto">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                    {/* Start: Movie Component */}
                    <div key={'movie-1'} class="single-movie relative">
                      <img src='./image/poster.svg' alt={'movie title'} />
                      <div class="movie-content flex items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                        <div class="content-inner">
                          <h3 class="mb-5">{'Movie title'}</h3>
                        </div>
                      </div>
                    </div>
                   {/* End: Movie Component */}
                    {/* Start: Movie Component */}
                    <div key={'movie-2'} class="single-movie relative">
                      <img src='./image/poster.svg' alt={'movie title'} />
                      <div class="movie-content flex items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                        <div class="content-inner">
                          <h3 class="mb-5">{'Movie title'}</h3>
                        </div>
                      </div>
                    </div>
                   {/* End: Movie Component */}
                    {/* Start: Movie Component */}
                    <div key={'movie-3'} class="single-movie relative">
                      <img src='./image/poster.svg' alt={'movie title'} />
                      <div class="movie-content flex items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                        <div class="content-inner">
                          <h3 class="mb-5">{'Movie title'}</h3>
                        </div>
                      </div>
                    </div>
                   {/* End: Movie Component */}
                    {/* Start: Movie Component */}
                    <div key={'movie-4'} class="single-movie relative">
                      <img src='./image/poster.svg' alt={'movie title'} />
                      <div class="movie-content flex items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                        <div class="content-inner">
                          <h3 class="mb-5">{'Movie title'}</h3>
                        </div>
                      </div>
                    </div>
                   {/* End: Movie Component */}
              </div>
            </div>
          </div>
          {/* End: MovieList Component */}
        </section>

        {/* Start: Footer Component */}
        <footer class="py-6 bg-gray-900">
          <div class="container mx-auto text-center">
            <p>Hackflix © 2020 Powered by Hackages</p>
          </div>
        </footer>
        {/* End: Footer Component */}
      </>
  );
}
