import React from 'react';
import {ICategory} from '../types';

interface IFilterProps {
    categories: ICategory[];
    categoriesCallback: (activeCategory: string) => void
}

export function Categories({categories, categoriesCallback}: IFilterProps) {
    return (
        <div />
    );
}
