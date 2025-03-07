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

  const initialQuery = searchParams.get('query');
  const [query, setQuery] = useState(initialQuery ?? '');

  const handleSearchInputChange = (value: string) => {
    setQuery(value);
    if (debounceSearch.current) clearTimeout(debounceSearch.current);

    debounceSearch.current = setTimeout(() => {
      const currentParams = new URLSearchParams(String(searchParams));
      if (!value) currentParams.delete('query');
      if (!!value) currentParams.set('query', value);
      router.push(`?${String(currentParams)}`);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <Input
        label='Buscar transação'
        placeholder='Digite o título'
        color='tertiary'
        id='search'
        value={query}
        onChange={(e) => handleSearchInputChange(e.target.value)}
      />
      <Button
        variant='contained'
        color='tertiary'
        className={styles.searchButton}
        aria-label={query ? 'Limpar busca' : 'Buscar transação'}
        onClick={() => handleSearchInputChange('')}
      >
        {query ? <CloseIcon /> : <SearchIcon />}
      </Button>
    </div>
  );
};
