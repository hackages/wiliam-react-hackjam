import React from 'react';
import {App} from '../src/App';
import {ICategory, IGenre, IMovie} from '../src/types';
import {shallow} from 'enzyme';
import 'jest-enzyme'
import {Footer} from '../src/components/Footer';
import {Header} from '../src/components/Header';
import {Categories} from '../src/components/Categories';
import {Movie} from '../src/components/Movie';

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


test('should render multiples movies title and poster', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    // When
    const component = shallow(<App categories={[]} movies={movies} genres={[]}/>);

    // Then
    expect(component).toContainReact(<Movie movie={harryPotterAndThePhilosophersStoneMovie} />)
    expect(component).toContainReact(<Movie movie={harryPotterAndTheChamberOfSecretsMovie} />)
});

test('should filter the movies based on search terms (movie 1)', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    const component = shallow(<App categories={[]} movies={movies} genres={[]}/>);
    const header = component.find(Header).props()


    // When
    header.searchCallback('chamber')

    // Then
    expect(component).not.toContainReact(<Movie movie={harryPotterAndThePhilosophersStoneMovie} />)
    expect(component).toContainReact(<Movie movie={harryPotterAndTheChamberOfSecretsMovie} />)
});

test('should filter the movies based on search terms (movie 2)', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    const component = shallow(<App categories={[]} movies={movies} genres={[]}/>);
    const header = component.find(Header).props()

    // When
    header.searchCallback('stone')

    // Then
    expect(component).toContainReact(<Movie movie={harryPotterAndThePhilosophersStoneMovie} />)
    expect(component).not.toContainReact(<Movie movie={harryPotterAndTheChamberOfSecretsMovie} />)
});


test('should category filter movies based on active filter', () => {
    // Given
    const categories: ICategory[] = [
        {name: 'All'},
        {name: 'Adventure'},
        {name: 'Drama'},
    ];
    const genres: IGenre[] = [
        {
            id: 12,
            name: "Adventure",
        },
        {
            id: 18,
            name: "Drama",
        },
    ]
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
    const movies: IMovie[] = [
        titanicMovie,
        thorMovie,
    ]
    const component = shallow(<App categories={categories} movies={movies} genres={genres}/>);
    const categoriesComponent = component.find(Categories).props();

    // When
    categoriesComponent.categoriesCallback('Drama')

    // Then
    expect(component).toContainReact(<Movie movie={titanicMovie} />);
    expect(component).not.toContainReact(<Movie movie={thorMovie} />);
});

test('Footer should be present', () => {
    // Given
    const component = <App categories={[]} movies={[]} genres={[]} />;

    // When
    const renderedComponent = shallow(component)

    // Then
    expect(renderedComponent).toContainReact(<Footer  />)
});
