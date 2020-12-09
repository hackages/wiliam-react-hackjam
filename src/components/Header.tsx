import React, { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';

import * as SearchSlice from "../store/movies/searchSlice";
import * as MoviesSlice from "../store/movies/moviesSlice";

import { Logo } from "./Logo";
import { Search } from "./Search";

export function Header() {
  const dispatch = useDispatch();
  const searchValue = useSelector(SearchSlice.searchQuery);

  // FIXME: Debounce this method if search results are large (140ms).
  const onSearchInputChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;    
    dispatch(SearchSlice.search(e.target.value));
    dispatch(MoviesSlice.filterMoviesBySearchTerms());
  }, [dispatch]);

  return (
    <header className="py-10">
      <div className="container mx-auto">
        <div className="sm:flex items-center justify-between">
          <Logo />
          <div className="flex justify-center sm:justify-end items-center text-right lg:w-1/2 sm:w-3/4 w-full">
            <Search
              searchValue={searchValue}
              onSearchInputChanged={onSearchInputChanged}
            />
            <div className="nav">
              <a href="/bookmarks" className="bookmark-nav py-3 mr-5">
                Bookmarks
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
