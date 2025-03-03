import { CATEGORIES_TYPES_DICTIONARY_VALUES, CategoryTypeDictionaryValue } from '@/@types/category';
import { useState } from 'react';
import { Select } from '../shared/Select';
import styles from './styles.module.scss';

interface CategoriesOptionsSelectProps {
  type?: CategoryTypeDictionaryValue;
}

export const CategoriesOptionsSelect = ({ type }: CategoriesOptionsSelectProps) => {
  const [category, setCategory] = useState<CategoryTypeDictionaryValue | null>(type ?? null);

  return (
    <Select
      placeholder='Selecione a categoria'
      label='Categoria'
      options={CATEGORIES_TYPES_DICTIONARY_VALUES}
      value={category}
      onChange={setCategory}
      className={styles.selectWrapper}
      name='category'
    />
  );
};
