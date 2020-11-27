import React, { useCallback } from 'react';

export function Search({searchCallback}: { searchCallback: (searchTerms: string) => void }) {
    const onSearchInputChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target) {
            return;
        }

        const searchTerms = e.target.value;
        searchCallback(searchTerms);
    }, [searchCallback]);
    
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
}
