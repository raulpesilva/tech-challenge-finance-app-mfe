import { ConvertUnionToTuple } from '../utils';

export const TRANSACTIONS_TYPES = ['deposit', 'withdraw', 'investment', 'transfer'] as const;
export const TRANSACTIONS_TYPES_DICTIONARY = {
  deposit: 'Depósito',
  withdraw: 'Retirada',
  investment: 'Investimento',
  transfer: 'Transferência',
} as const;

export const TRANSACTIONS_TYPES_DICTIONARY_MAP = {
  Depósito: 'deposit',
  Retirada: 'withdraw',
  Investimento: 'investment',
  Transferência: 'transfer',
} as const;

export const TRANSACTIONS_TYPES_DICTIONARY_VALUES = Object.values(
  TRANSACTIONS_TYPES_DICTIONARY
) as TransactionTypeDictionaryValues;

export type TransactionOptions = typeof TRANSACTIONS_TYPES;
export type TransactionType = (typeof TRANSACTIONS_TYPES)[number];
export type TransactionTypeDictionary = typeof TRANSACTIONS_TYPES_DICTIONARY;
export type TransactionTypeDictionaryKey = keyof TransactionTypeDictionary;
export type TransactionTypeDictionaryValues = ConvertUnionToTuple<
  TransactionTypeDictionary[TransactionTypeDictionaryKey]
>;
export type TransactionTypeDictionaryValue = TransactionTypeDictionaryValues[number];

export interface Transaction {
  id: string;
  date: string;
  value: number;
  author: string;
  type: TransactionType;
}
