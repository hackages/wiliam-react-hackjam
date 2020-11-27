import React from 'react';
import {App} from '../src/App';
import {ICategory, IGenre, IMovie} from '../src/types';
import {shallow} from 'enzyme';
import 'jest-enzyme'
import {Footer} from '../src/components/Footer';

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
    const component = shallow(<App categories={[]} movies={movies} genres={[]}/>);

    // Then
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and the Philosopher's Stone</h3>)
});

test('should render one movie title and poster', () => {
    // Given
    const movies: IMovie[] = [harryPotterAndTheChamberOfSecretsMovie]

    // When
    const component = shallow(<App categories={[]} movies={movies} genres={[]}/>);

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
    const component = shallow(<App categories={[]} movies={movies} genres={[]}/>);

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
    const component = shallow(<App categories={[]} movies={movies} genres={[]}/>);
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
    const component = shallow(<App categories={[]} movies={movies} genres={[]}/>);
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
    const component = shallow(<App categories={categories} movies={[]} genres={[]}/>);

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>Documentary</button>)
});

test('should render another category name', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Action', },
    ]
    // When
    const component = shallow(<App categories={categories} movies={[]} genres={[]}/>);

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
    const component = shallow(<App categories={categories} movies={[]} genres={[]}/>);

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

test('should set documentary category active when clicking on it', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Documentary',},
    ]
    const component = shallow(<App categories={categories} movies={[]} genres={[]}/>);
    const documentaryCategory = component.findWhere(element => element.text() === 'Documentary').find('li')

    // When
    documentaryCategory.simulate('click')

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block active'}>Documentary</button>);
});

test('should set Action category active when clicking on it', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Action',},
    ]
    const component = shallow(<App categories={categories} movies={[]} genres={[]}/>);
    const actionCategory = component.findWhere(element => element.text() === 'Action').find('li')

    // When
    actionCategory.simulate('click')

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block active'}>Action</button>);
});

test('default active category should be category: "All" (w/o click)', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'All',},
        { name: 'Documentary',},
        { name: 'Action',},
    ]

    // When
    const component = shallow(<App categories={categories} movies={[]}  genres={[]}/>);

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block active'}>All</button>);
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>Documentary</button>);
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>Action</button>);
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
    const movies: IMovie[] = [
        {
            id: 597,
            title: 'Titanic',
            poster_path: '/kHXEpyfl6zqn8a6YuozZUujufXf.jpg',
            genre_ids: [18, 10749, 53],
            backdrop_path: '/fVcZErSWa7gyENuj8IWp8eAfCnL.jpg',
        },
        {
            id: 10195,
            title: 'Thor',
            poster_path: '/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg',
            genre_ids: [12, 14, 28],
            backdrop_path: '/6UxFfo8K3vcihtUpX1ek2ucGeEZ.jpg',
        },
    ]
    const component = shallow(<App categories={categories} movies={movies} genres={genres}/>);
    const dramaCategory = component.findWhere(element => element.text() === 'Drama').find('li')

    // When
    dramaCategory.simulate('click')

    // Then
    expect(component).toContainReact(<h3 className="mb-5">Titanic</h3>);
    expect(component).not.toContainReact(<h3 className="mb-5">Thor</h3>);
});

test('Footer should be present', () => {
    // Given
    const component = <App categories={[]} movies={[]} genres={[]} />;

    // When
    const renderedComponent = shallow(component)

    // Then
    expect(renderedComponent).toContainReact(<Footer  />)
});
