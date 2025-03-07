'use client';

import {
  CATEGORIES_TYPES_DICTIONARY_MAP,
  CATEGORIES_TYPES_DICTIONARY_VALUES,
  CategoryTypeDictionaryValue,
} from '@/@types/category';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../shared/Button';
import { Select } from '../shared/Select';
import styles from './styles.module.scss';

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

  const handleClearFilter = () => {
    setCategory(null);
    const currentParams = new URLSearchParams(String(searchParams));
    currentParams.delete('category');
    router.push(`?${String(currentParams)}`);
  };

  return (
    <div className={styles.container}>
      <Select
        label='Filtrar categoria'
        placeholder='Selecione a categoria'
        options={CATEGORIES_TYPES_DICTIONARY_VALUES}
        value={category}
        onChange={handleSearchInputChange}
        name='filter-category'
        color='tertiary'
      />

      {category && (
        <Button variant='text' color='tertiary' onClick={handleClearFilter} className={styles.clearFilter}>
          Limpar filtro
        </Button>
      )}
    </div>
  );
};
