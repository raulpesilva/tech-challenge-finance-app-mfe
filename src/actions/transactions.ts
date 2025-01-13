'use server';

import { ActionResponse, Fields } from '@/@types/actions';
import {
  TRANSACTIONS_TYPES,
  TRANSACTIONS_TYPES_DICTIONARY_MAP,
  TransactionTypeDictionaryValue,
} from '@/@types/transaction';
import { getUser } from '@/lib/auth/getUser';
import { createTransaction, deleteTransaction } from '@/services/transaction';
import { undoMaskCurrency } from '@/utils/masks/maskCurrency';
import { revalidatePath } from 'next/cache';

export type CreateTransactionFields = Fields<{ type: string; value: string; date: string }>;
export type CreateTransactionResponse = ActionResponse<CreateTransactionFields>;

export const createTransactionAction = async (_state: CreateTransactionResponse, formData: FormData) => {
  const dictionaryType = formData.get('type') as TransactionTypeDictionaryValue;
  const type = TRANSACTIONS_TYPES_DICTIONARY_MAP[dictionaryType];
  const date = formData.get('date') as string;
  const stringValue = undoMaskCurrency(formData.get('value') as string);
  const numberValue = Number(stringValue);
  console.log({ type, value: numberValue, date });

  const fields: CreateTransactionFields = {
    inputs: { type, value: stringValue, date },
    errors: {},
  };

  if (!type) fields.errors.type = ['Tipo é obrigatório'];
  if (!stringValue) fields.errors.value = ['Valor é obrigatório'];
  if (!date.replace(/\D/g, '')) fields.errors.date = ['Data é obrigatória'];
  if (!TRANSACTIONS_TYPES.some((t) => t === type)) fields.errors.type = ['Tipo inválido'];

  const response = { ...fields, success: !Object.keys(fields.errors).length } as CreateTransactionResponse;
  if (Object.keys(fields.errors).length) return response;

  try {
    const user = await getUser();
    if (!user) return { ...response, success: false, errors: { type: ['Usuário não encontrado'] } };
    await createTransaction({ type, value: numberValue, date, author: user.id });
    return { ...response, inputs: { ...response.inputs, value: '', date: '' }, success: true };
  } catch (error) {
    return { ...response, success: false, errors: { type: ['Erro ao criar transação'] } };
  }
};

export const deleteTransactionAction = async (id: string, _formData: FormData) => {
  await deleteTransaction(id);
  revalidatePath('/dashboard');
};
