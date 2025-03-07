'use client';

import {
  CATEGORIES_TYPES_DICTIONARY_MAP,
  CATEGORIES_TYPES_DICTIONARY_VALUES,
  CategoryTypeDictionaryValue,
} from '@/@types/category';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Select } from '../shared/Select';

export const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get('category') as CategoryTypeDictionaryValue;
  const hasCategory = initialCategory && CATEGORIES_TYPES_DICTIONARY_MAP[initialCategory];
  const [category, setCategory] = useState(hasCategory ? initialCategory : null);

  const handleSearchInputChange = (value: CategoryTypeDictionaryValue) => {
    setCategory(value);
    const currentParams = new URLSearchParams(String(searchParams));
    currentParams.set('category', value);
    router.push(`?${String(currentParams)}`);
  };

  return (
    <Select
      label='Filtrar categoria'
      placeholder='Selecione a categoria'
      options={CATEGORIES_TYPES_DICTIONARY_VALUES}
      value={category}
      onChange={handleSearchInputChange}
      name='filter-category'
      color='tertiary'
    />
  );
};
