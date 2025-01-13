'use client';

import ArrowIcon from '@/assets/icons/arrow-icon.svg';
import { combineStyles } from '@/utils/combineStyles';
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
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
  name?: string;
}

const SelectItem = ({ option, value, handleSelect }: SelectItemProps) => {
  const itemSelected = option === value;

  return (
    <li
      tabIndex={0} // tornar o item do select acessível por teclado
      className={combineStyles([styles.item, itemSelected && styles.selected])}
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
  name,
}: SelectProps<T>) => {
  const [opened, setOpened] = useState(false);
  const refButton = useRef<HTMLButtonElement>(null);

  const handleOpen = useCallback(
    (e: MouseEvent) => {
      if (!opened) e.stopPropagation();
      setOpened(true);
    },
    [opened]
  );

  const handleClose = useCallback(
    (e: Event) => {
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
    <div className={combineStyles([styles.container, className && className])}>
      {!!label && <label onClick={(e) => handleOpen(e)}>{label}</label>}
      <input type='hidden' value={value || ''} name={name} />

      <div className={combineStyles([styles.selectContainer])}>
        <button
          ref={refButton}
          type='button'
          onClick={(e) => handleOpen(e)}
          className={combineStyles([opened ? styles.opened : '', !!value ? styles.selected : ''])}
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
