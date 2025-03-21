'use client';

import { CATEGORIES_TYPES_DICTIONARY, CategoryTypeDictionaryKey, CategoryTypeDictionaryValue } from '@/@types/category';
import {
  TRANSACTIONS_TYPES_DICTIONARY,
  TransactionTypeDictionaryKey,
  TransactionTypeDictionaryValue,
} from '@/@types/transaction';
import { CreateTransactionResponse, UpdateTransactionResponse } from '@/actions/transactions';
import { maskCurrency } from '@/utils/masks/maskCurrency';
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
import { useActionState, useState } from 'react';
import { CategoriesOptionsSelect } from '../CategoriesOptionsSelect';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { InputFile } from '../shared/InputFile';
import { Typography } from '../shared/Typography';
import { TransactionDate } from '../TransactionDate';
import { TransactionOptionsSelect } from '../TransactionOptionsSelect';
import styles from './styles.module.scss';

interface FormTransactionProps {
  type?: TransactionTypeDictionaryKey;
  transactionAction: (
    state: CreateTransactionResponse | UpdateTransactionResponse,
    payload: FormData
  ) => Promise<CreateTransactionResponse | UpdateTransactionResponse>;
  initialTransaction: CreateTransactionResponse | UpdateTransactionResponse;
  id?: string;
}

export const FormTransaction = ({ type, initialTransaction, transactionAction, id }: FormTransactionProps) => {
  const [state, action, isPending] = useActionState(transactionAction, initialTransaction);
  const initialType = (state?.inputs?.type || type) as TransactionTypeDictionaryKey;
  const transactionType = TRANSACTIONS_TYPES_DICTIONARY[initialType] as TransactionTypeDictionaryValue;
  const initialCategory = state?.inputs?.category as CategoryTypeDictionaryKey;
  const categoryType = CATEGORIES_TYPES_DICTIONARY[initialCategory] as CategoryTypeDictionaryValue;
  const initialDate = state?.inputs?.dateIso ? dayjs(state.inputs.dateIso) : dayjs();
  const initialAttachment = state?.inputs?.attachment;

  const hasAdvancedOptions = (!!categoryType && categoryType !== 'Sem Categoria') || !!initialAttachment;
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(hasAdvancedOptions);

  return (
    <form className={styles.formWrapper} action={action}>
      {id && <input type='hidden' name='id' value={id} />}

      <TransactionOptionsSelect type={transactionType} />
      {state?.errors?.type?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}

      <Input
        id='title'
        name='title'
        label='Título'
        placeholder='Digite o título da transação'
        className={styles.valueWrapper}
        defaultValue={state?.inputs?.title}
      />
      {state?.errors?.title?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}

      <Input
        id='value'
        name='value'
        label='Valor'
        placeholder='Digite o valor da transação'
        onInput={(e) => (e.currentTarget.value = maskCurrency(e.currentTarget.value))}
        className={styles.valueWrapper}
        defaultValue={maskCurrency(state?.inputs?.value)}
      />
      {state?.errors?.value?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}

      <TransactionDate initialDate={initialDate} />
      {state?.errors?.date?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}

      {!showAdvancedOptions && (
        <Button
          type='button'
          variant='outlined'
          color='primary'
          className={styles.advancedOptionsButton}
          onClick={() => setShowAdvancedOptions(true)}
        >
          Opções avançadas
        </Button>
      )}

      {showAdvancedOptions && (
        <>
          <CategoriesOptionsSelect type={categoryType} />
          {state?.errors?.category?.map((error) => (
            <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
              {error}
            </Typography>
          ))}

          <InputFile
            id='file'
            className={styles.uploadButton}
            label='Anexo'
            name='attachment'
            attachment={state?.inputs?.attachment}
          />
        </>
      )}

      {state?.message && (
        <Typography variant='span' color='error' className={styles.errorMessage}>
          {state?.message}
        </Typography>
      )}

      <Button variant='contained' color='primary' className={styles.submitButton} loading={isPending}>
        {id ? 'Atualizar' : 'Concluir transação'}
      </Button>

      {state.success && (
        <Typography variant='span' color='success' className={styles.successMessage}>
          Transação realizada com sucesso!
        </Typography>
      )}
    </form>
  );
};
