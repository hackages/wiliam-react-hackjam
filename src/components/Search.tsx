import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { search, searchQuery } from '../store/reducers/movies/searchReducer';
import { fetchMovies } from '../store/reducers/movies/moviesReducer';

export function Search() {
    const dispatch = useDispatch();
    const searchValue = useSelector(searchQuery);
    
    const onSearchInputChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target) {
            return;
        }
        
        // TODO: Debounce this.
        dispatch(search(e.target.value));
        dispatch(fetchMovies());
    }, [dispatch]);
    
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
