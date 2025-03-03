import { CreateTransactionResponse, updateTransactionAction } from '@/actions/transactions';
import imageBanner from '@/assets/images/main-banner-edit.png';
import { FormTransaction } from '@/components/FormTransaction';
import { GoBackButton } from '@/components/GoBackButton';
import { getTransactionById } from '@/services/transaction';
import Image from 'next/image';
import styles from './styles.module.scss';

const initialTransaction = {
  inputs: { date: '', type: '', value: '', category: '', title: '' },
  errors: {},
} satisfies CreateTransactionResponse;

export default async function Page({ params }: { params: Promise<{ [key: string]: string | undefined }> }) {
  const { id } = await params;
  if (!id) return null;
  const transaction = await getTransactionById(id);
  const hasAdvancedOptions = transaction.category && transaction.category !== 'uncategorized';

  return (
    <div className={styles.container}>
      <GoBackButton />
      <div className={styles.content}>
        <FormTransaction
          id={id}
          initialTransaction={{
            ...initialTransaction,
            inputs: {
              ...initialTransaction.inputs,
              value: String(transaction.value),
              date: transaction.date,
              type: transaction.type,
              dateIso: transaction.dateIso,
              category: transaction.category,
              title: transaction.title,
            },
          }}
          transactionAction={async (state, formData) => {
            'use server';
            return await updateTransactionAction(state, formData);
          }}
          hasAdvancedOptions={hasAdvancedOptions}
        />

        <Image
          src={imageBanner}
          alt='Ilustração de uma pessoa olhando para uma tela com uma lista de tarefas, onde uma delas está marcada como concluída.'
          width={400}
          height={310}
          className={styles.banner}
        />
      </div>
    </div>
  );
}
