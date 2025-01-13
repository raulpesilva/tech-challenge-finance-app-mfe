'use server';

import { Filters } from '@/@types/filters';
import { Transaction } from '@/@types/transaction';
import { convertToSearchString, onlyKeysWithTruthyValueAndConvertToString } from '@/utils/object';

const BASE_URL = `${process.env.REACT_API_URL}/transactions`;

export const createTransaction = async (transaction: Omit<Transaction, 'id'>) => {
  'use server';
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });

  return response.json() as Promise<Transaction>;
};

export const getTransactionsByUser = async (author: string, filters: Filters<Transaction> = {}) => {
  'use server';
  const searchParams = convertToSearchString(onlyKeysWithTruthyValueAndConvertToString({ author, ...filters }));
  const response = await fetch(`${BASE_URL}?${searchParams}`);
  return response.json() as Promise<Transaction[]>;
};

export const getTransactionById = async (id: string) => {
  'use server';

  const response = await fetch(`${BASE_URL}/${id}`);
  const result: Transaction = await response.json();
  return result;
};

export const updateTransaction = async (transaction: Transaction) => {
  'use server';

  const response = await fetch(`${BASE_URL}/${transaction.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });

  return response.json() as Promise<Transaction>;
};

export const deleteTransaction = async (id: string) => {
  'use server';

  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  return response.json() as Promise<Transaction>;
};
