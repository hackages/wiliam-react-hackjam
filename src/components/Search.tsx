import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { search } from '../store/reducers/movies/searchReducer';

export function Search() {
    const dispatch = useDispatch();
    
    const onSearchInputChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target) {
            return;
        }
        
        // TODO: Debounce this.
        dispatch(search(e.target.value));
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
            />
            <button type="submit" className="search-btn">
            <img src="./image/search.svg" alt="search" />
            </button>
        </form>
    );
};
