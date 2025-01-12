import { ActionResponse, Fields } from '@/@types/actions';
import { TRANSACTIONS_TYPES, TransactionType } from '@/@types/transaction';
import { getUser } from '@/lib/auth/getUser';
import { createTransaction } from '@/services/transaction';

export type CreateTransactionFields = Fields<{ type: string; value: number; date: string }>;
export type CreateTransactionResponse = ActionResponse<CreateTransactionFields>;

export const createTransactionAction = async (_state: CreateTransactionResponse, formData: FormData) => {
  const type = formData.get('type') as TransactionType;
  const value = Number(formData.get('value'));
  const date = formData.get('date') as string;

  const fields: CreateTransactionFields = {
    inputs: { type, value, date },
    errors: {},
  };

  if (!type) fields.errors.type = ['Tipo é obrigatório'];
  if (!value) fields.errors.value = ['Valor é obrigatório'];
  if (!date) fields.errors.date = ['Data é obrigatória'];
  if (!TRANSACTIONS_TYPES.some((t) => t === type)) fields.errors.type = ['Tipo inválido'];

  const response = { ...fields, success: !Object.keys(fields.errors).length } as CreateTransactionResponse;
  if (Object.keys(fields.errors).length) return response;

  try {
    const user = await getUser();
    if (!user) return { ...response, success: false, errors: { type: ['Usuário não encontrado'] } };
    await createTransaction({ type, value, date, author: user.id });
    return { ...response, success: true };
  } catch (error) {
    return { ...response, success: false, errors: { type: ['Erro ao criar transação'] } };
  }
};
