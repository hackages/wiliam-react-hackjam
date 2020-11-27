import {shallow} from 'enzyme';
import React from 'react';
import {Footer} from '../src/components/Footer';
import 'jest-enzyme'

test('footer should contains copy right', () => {
    // Given

    // When
    const component = shallow(<Footer />);

    // Then
    expect(component.text()).toBe('Hackflix © 2020 Powered by Hackages');
});

test('footer component should be a HTML footer', () => {
    // Given

    // When
    const component = shallow(<Footer />);

    // Then
    expect(component).toContainMatchingElement('footer');
});
