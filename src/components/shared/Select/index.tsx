'use client';

import { combaneStyles } from '@/utils/combaneStyles';
import { useCallback, useEffect, useState } from 'react';
import Arrow from '../../../assets/icons/arrow-icon.svg';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

interface SelectItemProps {
  option: string;
  value: string | null;
  handleSelect: (option: string) => void;
}

interface SelectProps<T extends readonly string[]> {
  placeholder: string;
  options: T;
  value: T[number] | null;
  onChange: (option: T[number]) => void;
  label?: string;
  success?: boolean;
  successMessage?: string;
  error?: boolean;
  errorMessage?: string;
}

const SelectItem = ({ option, value, handleSelect }: SelectItemProps) => {
  const itemSelected = option === value;

  return (
    <li
      tabIndex={0} // tornar o item do select acessível por teclado
      className={combaneStyles([styles.item, itemSelected && styles.selected])}
      onClick={() => handleSelect(option)}
      onKeyDown={(e) => e.key === 'Enter' && handleSelect(option)}
    >
      {option}
    </li>
  );
};

export const Select = <T extends readonly string[]>({
  placeholder,
  options,
  value,
  onChange,
  label,
  success,
  successMessage,
  error,
  errorMessage,
}: SelectProps<T>) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = useCallback(() => setOpened(true), []);
  const handleClose = useCallback(() => setOpened(false), []);

  const handleSelect = useCallback((option: string) => {
    onChange(option);
    handleClose();
  }, [onChange, handleClose]);

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => document.removeEventListener('click', handleClose);
  }, [handleClose]);

  return (
    <div className={styles.container}>
      {!!label && <label onClick={handleOpen}>{label}</label>}

      <div
        className={combaneStyles([styles.selectContainer, error && styles.error, !error && success && styles.success])}
      >
        <button
          type='button'
          onClick={handleOpen}
          className={combaneStyles([opened ? styles.opened : '', !!value ? styles.selected : ''])}
        >
          {value ?? placeholder}
          <Arrow />
        </button>

        {opened && (
          <ul className={styles.list}>
            {options.map((option, i) => (
              <SelectItem
                key={`select-item-${option}-${i}`}
                option={option}
                value={value}
                handleSelect={handleSelect}
              />
            ))}
          </ul>
        )}
      </div>

      {error && !!errorMessage && (
        <Typography variant='paragraph' size='sm' color='error'>
          {errorMessage}
        </Typography>
      )}

      {!error && success && !!successMessage && (
        <Typography variant='paragraph' size='sm' color='success'>
          {successMessage}
        </Typography>
      )}
    </div>
  );
};
