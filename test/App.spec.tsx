import React from 'react';
import {App} from '../src/App';
import {ICategory, IMovie} from '../src/types';
import {shallow} from 'enzyme';
import 'jest-enzyme'

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

test('App should render the movie title', () => {
    // Given
    const movies: IMovie[] = [harryPotterAndThePhilosophersStoneMovie]

    // When
    const component = shallow(<App categories={[]} movies={movies}/>);

    // Then
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and the Philosopher's Stone</h3>)
});

test('should render one movie title and poster', () => {
    // Given
    const movies: IMovie[] = [harryPotterAndTheChamberOfSecretsMovie]

    // When
    const component = shallow(<App categories={[]} movies={movies}/>);

    // Then
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and Chamber of Secrets</h3>)
    expect(component).toContainReact(<img src={'/posters/harry-potter-and-the-chamber-of-secrets'}
                                          alt={'Harry Potter and Chamber of Secrets'}/>)
});

test('should render multiples movies title and poster', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    // When
    const component = shallow(<App categories={[]} movies={movies}/>);

    // Then
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and the Philosopher's Stone</h3>)
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and Chamber of Secrets</h3>)
    expect(component).toContainReact(<img src={'/posters/harry-potter-and-the-philosopher-s-stone'}
                                                  alt={'Harry Potter and the Philosopher\'s Stone'}/>)
    expect(component).toContainReact(<img src={'/posters/harry-potter-and-the-chamber-of-secrets'}
                                                  alt={'Harry Potter and Chamber of Secrets'}/>)
});

test('should filter the movies based on search terms (movie 1)', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    const component = shallow(<App categories={[]} movies={movies}/>);
    const searchInput = component.find('input[role="search"]')

    // When
    searchInput.simulate('change', {target: {value: 'chamber'}})

    // Then
    expect(component).not.toContainReact(<h3 className="mb-5">Harry Potter and the Philosopher's Stone</h3>)
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and Chamber of Secrets</h3>)
    expect(component).not.toContainReact(<img src={'/posters/harry-potter-and-the-philosopher-s-stone'}
                                              alt={'Harry Potter and the Philosopher\'s Stone'}/>)
    expect(component).toContainReact(<img src={'/posters/harry-potter-and-the-chamber-of-secrets'}
                                          alt={'Harry Potter and Chamber of Secrets'}/>)
});

test('should filter the movies based on search terms (movie 2)', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    const component = shallow(<App categories={[]} movies={movies}/>);
    const searchInput = component.find('input[role="search"]')

    // When
    searchInput.simulate('change', {target: {value: 'stone'}})

    // Then
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and the Philosopher's Stone</h3>)
    expect(component).not.toContainReact(<h3 className="mb-5">Harry Potter and Chamber of Secrets</h3>)
    expect(component).toContainReact(<img src={'/posters/harry-potter-and-the-philosopher-s-stone'}
                                              alt={'Harry Potter and the Philosopher\'s Stone'}/>)
    expect(component).not.toContainReact(<img src={'/posters/harry-potter-and-the-chamber-of-secrets'}
                                          alt={'Harry Potter and Chamber of Secrets'}/>)
});

test('should render a category name', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Documentary' },
    ]
    // When
    const component = shallow(<App categories={categories} movies={[]}/>);

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>Documentary</button>)
});

test('should render another category name', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Action', },
    ]
    // When
    const component = shallow(<App categories={categories} movies={[]}/>);

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>Action</button>);
});

test('should render multiple categories', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Documentary', },
        { name: 'Action', },
        { name: 'Drama', },
    ]
    // When
    const component = shallow(<App categories={categories} movies={[]}/>);

    // Then
    expect(component).toContainReact(
        <button className={'px-3 md:px-6 py-3 block'}>Documentary</button>,
    );
    expect(component).toContainReact(
        <button className={'px-3 md:px-6 py-3 block'}>Action</button>,
    );
    expect(component).toContainReact(
        <button className={'px-3 md:px-6 py-3 block'}>Drama</button>,
    );
});
