'use server';

import { ActionResponse, Fields } from '@/@types/actions';
import {
  TRANSACTIONS_TYPES,
  TRANSACTIONS_TYPES_DICTIONARY_MAP,
  TransactionTypeDictionaryValue,
} from '@/@types/transaction';
import { getUser } from '@/lib/auth/getUser';
import { createTransaction, deleteTransaction, updateTransaction } from '@/services/transaction';
import { undoMaskCurrency } from '@/utils/masks/maskCurrency';
import dayjs from 'dayjs';
import { revalidatePath } from 'next/cache';

export type CreateTransactionFields = Fields<{ type: string; value: string; date: string; dateIso?: string }>;
export type CreateTransactionResponse = ActionResponse<CreateTransactionFields>;

export const createTransactionAction = async (_state: CreateTransactionResponse, formData: FormData) => {
  const dictionaryType = formData.get('type') as TransactionTypeDictionaryValue;
  const type = TRANSACTIONS_TYPES_DICTIONARY_MAP[dictionaryType];
  const date = formData.get('date') as string;
  const stringValue = undoMaskCurrency(formData.get('value') as string);
  const numberValue = Number(stringValue);
  const [day, month, year] = date.split('/');

  const fields: CreateTransactionFields = {
    inputs: { type, value: stringValue, date, dateIso: '' },
    errors: {},
  };
  if (!date.replace(/\D/g, '')) fields.errors.date = ['Data é obrigatória'];
  if (!type) fields.errors.type = ['Tipo é obrigatório'];
  if (!stringValue || numberValue === 0) fields.errors.value = ['Valor é obrigatório'];
  if (!TRANSACTIONS_TYPES.some((t) => t === type)) fields.errors.type = ['Tipo inválido'];

  if (date) {
    const dateIso = dayjs(`${year}-${month}-${day}`).toISOString();
    fields.inputs.dateIso = dateIso;
  }

  if (!fields.inputs.dateIso) fields.errors.date = ['Data é obrigatória'];

  const response = { ...fields, success: !Object.keys(fields.errors).length } as CreateTransactionResponse;
  if (Object.keys(fields.errors).length) return response;

  try {
    const user = await getUser();
    if (!user) return { ...response, success: false, errors: { type: ['Usuário não encontrado'] } };

    await createTransaction({ type, value: numberValue, date, author: user.id, dateIso: fields.inputs.dateIso! });
    revalidatePath('/dashboard');
    return { ...response, inputs: { ...response.inputs, value: '', date: '', dateIso: '' }, success: true };
  } catch {
    return { ...response, success: false, errors: { type: ['Erro ao criar transação'] } };
  }
};

export type UpdateTransactionFields = Fields<{ type: string; value: string; date: string; dateIso?: string }>;
export type UpdateTransactionResponse = ActionResponse<UpdateTransactionFields>;

export const updateTransactionAction = async (_state: UpdateTransactionResponse, formData: FormData) => {
  const dictionaryType = formData.get('type') as TransactionTypeDictionaryValue;
  const type = TRANSACTIONS_TYPES_DICTIONARY_MAP[dictionaryType];
  const date = formData.get('date') as string;
  const id = formData.get('id') as string;
  const stringValue = undoMaskCurrency(formData.get('value') as string);
  const numberValue = Number(stringValue);
  const [day, month, year] = date.split('/');
  const dateIso = dayjs(`${year}-${month}-${day}`).toISOString();

  const fields: CreateTransactionFields = {
    inputs: { type, value: stringValue, date, dateIso },
    errors: {},
  };

  if (!type) fields.errors.type = ['Tipo é obrigatório'];
  if (!stringValue || numberValue === 0) fields.errors.value = ['Valor é obrigatório'];
  if (!date.replace(/\D/g, '')) fields.errors.date = ['Data é obrigatória'];
  if (!TRANSACTIONS_TYPES.some((t) => t === type)) fields.errors.type = ['Tipo inválido'];

  const response = { ...fields, success: !Object.keys(fields.errors).length } as CreateTransactionResponse;
  if (Object.keys(fields.errors).length) return response;

  try {
    const user = await getUser();
    if (!user) return { ...response, success: false, errors: { type: ['Usuário não encontrado'] } };

    await updateTransaction({ id, type, value: numberValue, date, author: user.id, dateIso });
    revalidatePath('/dashboard');
    revalidatePath('/dashboard/statement/*');
    return { ...response, success: true };
  } catch {
    return { ...response, success: false, errors: { type: ['Erro ao criar transação'] } };
  }
};

export const deleteTransactionAction = async (id: string, _formData: FormData) => {
  await deleteTransaction(id);
  revalidatePath('/dashboard');
};
