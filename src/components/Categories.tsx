import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import {ICategory} from '../types';

interface IFilterProps {
    categories: ICategory[];
    categoriesCallback: (activeCategory: string) => void;
}

export function Categories({ categories, categoriesCallback }: IFilterProps) {
    const [currentCategory, setCurrentCategory] = useState('All');

    const onCurrentCategoryChanged = useCallback((categoryName: string) => {
        setCurrentCategory(categoryName);
        categoriesCallback(categoryName);
    }, [categoriesCallback]);

    return (
        <div className="categories">
            <div className="container mx-auto text-center">
              <ul className="flex flex-row justify-center categories-list">
              {categories.map(category => (
                <li
                  key={category.name}
                  onClick={onCurrentCategoryChanged.bind(null, category.name)}
                >
                  <button
                    className={classNames({
                      'px-3 md:px-6 py-3 block': true,
                      active: currentCategory === category.name
                    })}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
              </ul>
            </div>
        </div>
    );
}
