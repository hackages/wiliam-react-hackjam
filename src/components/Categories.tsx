import React from 'react';
import classNames from 'classnames';

import { ICategory } from '../types';

interface ICategoriesProps {
  categories: ICategory[];
  activeCategory: string;
  onCategoryClicked: (categoryName: string) => void;
}

export function Categories({
  categories,
  activeCategory,
  onCategoryClicked
}: ICategoriesProps) {
  return (
    <div className="categories">
      <div className="container mx-auto text-center">
        <ul className="flex flex-row justify-center categories-list">
        {categories.map(category => (
          <li
            key={category.name}
            onClick={onCategoryClicked.bind(null, category.name)}
          >
            <button
              className={classNames({
                'px-3 md:px-6 py-3 block': true,
                active: activeCategory === category.name
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
