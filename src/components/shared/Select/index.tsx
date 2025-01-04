'use client';

import { combaneStyles } from '@/utils/combaneStyles';
import { useCallback, useEffect, useState } from 'react';
import ArrowIcon from '../../../assets/icons/arrow-icon.svg';
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
}: SelectProps<T>) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = useCallback(() => setOpened(true), []);
  const handleClose = useCallback(() => setOpened(false), []);

  const handleSelect = useCallback(
    (option: string) => {
      onChange(option);
      handleClose();
    },
    [onChange, handleClose]
  );

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => document.removeEventListener('click', handleClose);
  }, [handleClose]);

  return (
    <div className={styles.container}>
      {!!label && <label onClick={handleOpen}>{label}</label>}

      <div className={combaneStyles([styles.selectContainer])}>
        <button
          type='button'
          onClick={handleOpen}
          className={combaneStyles([opened ? styles.opened : '', !!value ? styles.selected : ''])}
        >
          {value ?? placeholder}
          <ArrowIcon />
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
    </div>
  );
};
