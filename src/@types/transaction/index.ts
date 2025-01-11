interface TransactionBase {
  id: string;
  date: string;
  value: number;
  author: string;
}

interface Deposit extends TransactionBase {
  type: 'deposit';
}

interface Withdraw extends TransactionBase {
  type: 'withdraw';
}

interface Investment extends TransactionBase {
  type: 'investment';
  stock: string;
  quantity: number;
}

interface Transfer extends TransactionBase {
  type: 'transfer';
  recipient: string;
}

export type Transaction = Deposit | Withdraw | Investment | Transfer;
