import {shallow} from 'enzyme';
import React from 'react';
import {Header} from '../src/components/Header';
import {Search} from '../src/components/Search';
import 'jest-enzyme'


test('header should contains search component with callback', () => {
    // Given
    const searchCallback = jest.fn()

    // When
    const renderedComponent = shallow(<Header searchValue={''} onSearchInputChanged={searchCallback} />);

    // Then
    expect(renderedComponent).toContainReact(<Search onSearchInputChanged={searchCallback} searchValue={''} />);
});


test('header component should be a HTML header', () => {
    // Given

    // When
    const component = shallow(<Header searchValue={''} onSearchInputChanged={() => null} />);

    // Then
    expect(component).toContainMatchingElement('header');
});
