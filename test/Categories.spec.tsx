import {ICategory} from '../src/types';
import {shallow} from 'enzyme';
import React from 'react';
import {Categories} from '../src/components/Categories';
import 'jest-enzyme'

test('should render a category name', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Documentary' },
    ]
    // When
    const component = shallow(<Categories categories={categories} currentCategory={'All'} onCurrentCategoryChanged={jest.fn()}/>);

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>Documentary</button>)
});

test('should render another category name', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Action', },
    ]
    // When
    const component = shallow(<Categories categories={categories} currentCategory={'All'} onCurrentCategoryChanged={jest.fn()}/>);

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
    const component = shallow(<Categories categories={categories} currentCategory={'All'} onCurrentCategoryChanged={jest.fn()}/>);

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
    const component = shallow(<Categories categories={categories} currentCategory={'Documentary'} onCurrentCategoryChanged={jest.fn()}/>);
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
    const component = shallow(<Categories categories={categories} currentCategory={'Action'} onCurrentCategoryChanged={jest.fn()}/>);
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
    const component = shallow(<Categories categories={categories} currentCategory={'All'} onCurrentCategoryChanged={jest.fn()}/>);

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block active'}>All</button>);
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>Documentary</button>);
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>Action</button>);
});



test('should emit to the categoriesCallback the category selected', () => {
    // Given
    const categories: ICategory[] = [
        { name: 'Comedy',},
    ]
    const categoriesCallback = jest.fn();
    const component = shallow(<Categories categories={categories} currentCategory={'Comedy'} onCurrentCategoryChanged={categoriesCallback}/>);
    const comedyCategory = component.findWhere(element => element.text() === 'Comedy').find('li')

    // When
    comedyCategory.simulate('click')

    // Then
    expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block active'}>Comedy</button>);
    expect(categoriesCallback).toHaveBeenCalledWith('Comedy')
});
