import {Search} from '../src/components/Search';
import {shallow} from 'enzyme';
import * as React from 'react';

test('Search component should emit with a callback the search terms', () => {
    // Given
    const searchCallback = jest.fn()
    const component = <Search searchValue={''} onSearchInputChanged={searchCallback} />
    const renderedComponent = shallow(component);
    const searchInput = renderedComponent.find('input[role="search"]')

    // When
    searchInput.simulate('change', { target: { value: 'some movie search terms' } })


    // Then
    expect(searchCallback).toHaveBeenCalledWith({ target: { value: 'some movie search terms' } });
});


