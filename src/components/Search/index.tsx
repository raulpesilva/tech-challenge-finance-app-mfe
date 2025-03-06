'use client';

import CloseIcon from '@/assets/icons/close-icon.svg';
import SearchIcon from '@/assets/icons/search-icon.svg';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import styles from './styles.module.scss';

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const debounceSearch = useRef<NodeJS.Timeout | undefined>(undefined);

  const query = searchParams.get('query');
  const [value, setValue] = useState(query ?? '');

  const handleSearchInputChange = (value: string) => {
    setValue(value);
    if (debounceSearch.current) clearTimeout(debounceSearch.current);
    debounceSearch.current = setTimeout(() => router.push(`?query=${value}`), 500);
  };

  return (
    <div className={styles.container}>
      <Input
        label='Buscar transação'
        placeholder='Digite o título'
        color='tertiary'
        id='search'
        value={value}
        onChange={(e) => handleSearchInputChange(e.target.value)}
      />
      <Button
        variant='contained'
        color='tertiary'
        className={styles.searchButton}
        aria-label={value ? 'Limpar busca' : 'Buscar transação'}
        onClick={() => handleSearchInputChange('')}
      >
        {value ? <CloseIcon /> : <SearchIcon />}
      </Button>
    </div>
  );
};
