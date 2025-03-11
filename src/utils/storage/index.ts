'use client';

export class CustomStorage {
  prefix: string = '';
  storage: Storage | null;

  constructor(storage: Storage | null, prefix?: string) {
    if (prefix) this.prefix = prefix;
    this.storage = storage;
  }

  getItem<T = any>(key: string) {
    if (!this.storage) return null;
    const formattedKey = this.prefix + key;
    const value = this.storage.getItem(formattedKey);
    if (!value) return null;
    const parsedValue = JSON.parse(value);
    return parsedValue.value as T;
  }

  setItem<T = any>(key: string, value: T) {
    if (!this.storage) return;
    const formattedKey = this.prefix + key;
    if (value === undefined) this.storage.removeItem(formattedKey);

    const formattedValue = JSON.stringify({ value });

    if (value !== undefined) this.storage.setItem(formattedKey, formattedValue);
  }

  removeItem(key: string) {
    if (!this.storage) return;
    const formattedKey = this.prefix + key;
    this.storage.removeItem(formattedKey);
  }
}

const getLocalStorage = () => {
  if (typeof window !== 'undefined') return window.localStorage;
  return null;
};

export const customLocalStorage = new CustomStorage(getLocalStorage(), 'tech-challenge-');
