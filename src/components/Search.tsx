import React from 'react';

interface ISearchProps {
  searchValue: string;
  onSearchInputChanged(event: React.ChangeEvent<HTMLInputElement>): void;
}

export function Search({ searchValue, onSearchInputChanged }: ISearchProps) {
  return (
    <form className="flex mr-5 lg:mr-10">
      <input
        role={'search'}
        type="text"
        name="Search"
        placeholder="Search"
        className="search"
        onChange={onSearchInputChanged}
        value={searchValue}
      />
      <button type="submit" className="search-btn">
        <img src="./image/search.svg" alt="search" />
      </button>
    </form>
  );
};
