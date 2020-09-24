import {IMovie} from '../src/types';
import {shallow} from 'enzyme';
import React from 'react';
import {Movie} from '../src/components/Movie';
import 'jest-enzyme'


test('Movie component should render the movie title', () => {
    // Given
    const harryPotterAndThePhilosophersStoneMovie: IMovie = {
        id: 1,
        title: `Harry Potter and the Philosopher's Stone`,
        genre_ids: [1, 2, 3],
        backdrop_path: '',
        poster_path: '/posters/harry-potter-and-the-philosopher-s-stone',
    };

    // When
    const component = shallow(<Movie movie={harryPotterAndThePhilosophersStoneMovie}/>);

    // Then
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and the Philosopher's Stone</h3>)
});

test('Movie component should render one movie title and poster', () => {
    // Given
    const harryPotterAndTheChamberOfSecretsMovie: IMovie = {
        id: 2,
        title: 'Harry Potter and Chamber of Secrets',
        genre_ids: [1, 2, 3],
        backdrop_path: '',
        poster_path: '/posters/harry-potter-and-the-chamber-of-secrets',
    };

    // When
    const component = shallow(<Movie movie={harryPotterAndTheChamberOfSecretsMovie}/>);

    // Then
    expect(component).toContainReact(<h3 className="mb-5">Harry Potter and Chamber of Secrets</h3>)
    expect(component).toContainReact(<img src={'/posters/harry-potter-and-the-chamber-of-secrets'}
                                          alt={'Harry Potter and Chamber of Secrets'}/>)
});
