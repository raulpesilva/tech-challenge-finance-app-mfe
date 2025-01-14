import { CreateTransactionResponse, updateTransactionAction } from '@/actions/transactions';
import { FormTransaction } from '@/components/FormTransaction';
import { GoBackButton } from '@/components/GoBackButton';
import { getTransactionById } from '@/services/transaction';

export const InitialUpdateUserResponse = {
  inputs: { date: '', type: '', value: '' },
  errors: {},
} satisfies CreateTransactionResponse;

export default async function Page({ params }: { params: Promise<{ [key: string]: string | undefined }> }) {
  const { id } = await params;
  if (!id) return null;
  const transaction = await getTransactionById(id);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <GoBackButton />
      <FormTransaction
        id={id}
        initialTransaction={{
          ...InitialUpdateUserResponse,
          inputs: {
            ...InitialUpdateUserResponse.inputs,
            value: String(transaction.value),
            date: transaction.date,
            type: transaction.type,
            dateIso: transaction.dateIso,
          },
        }}
        transactionAction={async (state, formData) => {
          'use server';
          return await updateTransactionAction(state, formData);
        }}
      />
    </div>
  );
}
