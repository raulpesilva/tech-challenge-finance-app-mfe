export const TRANSACTIONS_TYPES = ['deposit', 'withdraw', 'investment', 'transfer'] as const;

export type TransactionType = (typeof TRANSACTIONS_TYPES)[number];
export interface Transaction {
  id: string;
  date: string;
  value: number;
  author: string;
  type: TransactionType;
}
