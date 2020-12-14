import 'jest-enzyme'
import { mount, shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';

import React from 'react';
import { Provider } from 'react-redux';

import { App } from '../src/App';
import { IMovie } from '../src/types';
import { Footer } from '../src/components/Footer';

import { store } from '../src/store';
import * as SearchSlice from '../src/store/movies/searchSlice';
import * as MoviesSlice from '../src/store/movies/moviesSlice';

const mockStore = configureMockStore([thunk]);

const harryPotterAndThePhilosophersStoneMovie: IMovie = {
    id: 1,
    title: `Harry Potter and the Philosopher's Stone`,
    genre_ids: [1, 2, 3],
    backdrop_path: '',
    poster_path: '/posters/harry-potter-and-the-philosopher-s-stone',
};

const harryPotterAndTheChamberOfSecretsMovie: IMovie = {
    id: 2,
    title: 'Harry Potter and Chamber of Secrets',
    genre_ids: [1, 2, 3],
    backdrop_path: '',
    poster_path: '/posters/harry-potter-and-the-chamber-of-secrets',
};


test('should render multiples movies title and poster', async (done) => {
    // Given
    const movies = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    const testStore = mockStore({
        movies: {
            movies
        }
    })
    const expectedActions = [
        {type: 'movies/setMovies', payload: movies }
    ]

    // When
    shallow(<Provider store={testStore}><App /></Provider>);
    await testStore.dispatch<any>(MoviesSlice.setMovies(movies));

    // Then
    const actions = testStore.getActions();
    expect(actions).toEqual(expectedActions);

    done();
});

test('should filter the movies based on search terms (movie 1)', () => {
    // Given
    const searchTerms = 'Chamber'
    const testStore = mockStore({
        movies: [
            harryPotterAndThePhilosophersStoneMovie,
            harryPotterAndTheChamberOfSecretsMovie,
        ]
    })
    const expectedActions = [
        { type: 'moviesSearch/setSearchQuery', payload: 'Chamber' },
    ]

    // When
    shallow(<Provider store={testStore}><App /></Provider>);
    testStore.dispatch<any>(SearchSlice.search(searchTerms)) 
    
    // Then
    const actions = testStore.getActions();
    expect(actions).toEqual(expectedActions);
});

test('should filter the movies based on search terms (movie 2)', async (done) => {
    // Given
    const searchTerms = 'stone';
    const movies = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    const testStore = mockStore({
        movies: {
            movies: movies,
            genres: [],
            currentCategory: 'All',
        },
        moviesSearch: {
            searchQuery: '',
        }
    })
    const expectedActions = [
        { type: 'moviesSearch/setSearchQuery', payload: searchTerms },
    ]

    // TODO: Dispatch redux action setMovies(movies)
    shallow(
        <Provider store={testStore}>
            <App />
        </Provider>
    );

    // When
    await testStore.dispatch<any>(SearchSlice.search('stone'));

    // Then
    const actions = testStore.getActions();
    expect(actions).toEqual(expectedActions);
    
    done();
});


test('should category filter movies based on active filter', async (done) => {
    // Given
    const titanicMovie = {
        id: 597,
        title: 'Titanic',
        poster_path: '/kHXEpyfl6zqn8a6YuozZUujufXf.jpg',
        genre_ids: [18, 10749, 53],
        backdrop_path: '/fVcZErSWa7gyENuj8IWp8eAfCnL.jpg',
    };
    const thorMovie = {
        id: 10195,
        title: 'Thor',
        poster_path: '/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg',
        genre_ids: [12, 14, 28],
        backdrop_path: '/6UxFfo8K3vcihtUpX1ek2ucGeEZ.jpg',
    };
    const testStore = mockStore({
        categories: [
            {name: 'All'},
            {name: 'Adventure'},
            {name: 'Drama'},
        ],
        genres: [
            {
                id: 12,
                name: "Adventure",
            },
            {
                id: 18,
                name: "Drama",
            },
        ],
        movies: [
            titanicMovie,
            thorMovie,
        ],
    })
    const expectedActions = [
        { type: 'movies/setCurrentCategory', payload: 'Drama' },
    ]

    shallow(
        <Provider store={testStore}>
            <App />
        </Provider>
    );

    // When
    await testStore.dispatch<any>(MoviesSlice.setCurrentCategory('Drama'));

    // Then
    const actions = testStore.getActions();
    expect(actions).toEqual(expectedActions);

    done();
});

test('Footer should be present', () => {
    // Given
    const component = (
        <Provider store={store}>
            <App />
        </Provider>
    );

    // When
    const renderedComponent = mount(component)

    // Then
    expect(renderedComponent).toContainReact(<Footer />)
});
