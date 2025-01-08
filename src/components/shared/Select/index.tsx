'use client';

import ArrowIcon from '@/assets/icons/arrow-icon.svg';
import { combaneStyles } from '@/utils/combaneStyles';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  className?: string;
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
  className,
}: SelectProps<T>) => {
  const [opened, setOpened] = useState(false);
  const refButton = useRef<HTMLButtonElement>(null);

  const handleOpen = useCallback(() => setOpened(true), []);

  const handleClose = useCallback(
    (e: MouseEvent) => {
      if (e.target === refButton.current && !opened) return;
      setOpened(false);
    },
    [opened]
  );

  const handleSelect = useCallback((option: string) => onChange(option), [onChange]);

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => document.removeEventListener('click', handleClose);
  }, [handleClose]);

  return (
    <div className={combaneStyles([styles.container, className && className])}>
      {!!label && <label onClick={handleOpen}>{label}</label>}

      <div className={combaneStyles([styles.selectContainer])}>
        <button
          ref={refButton}
          type='button'
          onClick={handleOpen}
          className={combaneStyles([opened ? styles.opened : '', !!value ? styles.selected : ''])}
        >
          {!!value ? value : placeholder}
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
