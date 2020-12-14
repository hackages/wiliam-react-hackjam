import React from "react";

import { Logo } from "./Logo";
import { Search } from "./Search";

interface IHeaderProps {
  searchValue: string;
  onSearchInputChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Header({ searchValue, onSearchInputChanged }: IHeaderProps) {
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
