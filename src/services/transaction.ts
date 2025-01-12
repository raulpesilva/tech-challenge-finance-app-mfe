'use server';

import { Transaction } from '@/@types/transaction';
import { onlyKeysWithTruthyValueAndConvertToString } from '@/utils/object';

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

export const getTransactionsByUser = async (author: string, filters: Partial<Transaction> = {}) => {
  'use server';
  const searchParams = new URLSearchParams(onlyKeysWithTruthyValueAndConvertToString({ author, ...filters }));
  const response = await fetch(`${BASE_URL}?${searchParams.toString()}`);
  return response.json() as Promise<Transaction[]>;
};

export const getTransactionById = async (id: string) => {
  'use server';

  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json() as Promise<Transaction>;
};

export const updateTransaction = async (transaction: Transaction) => {
  'use server';

  const response = await fetch(`${BASE_URL}/${transaction.id}`, {
    method: 'PUT',
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
