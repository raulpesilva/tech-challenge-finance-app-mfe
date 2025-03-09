import { createReStateMethods } from '@raulpesilva/re-state';

const key = 'showBalanceValue';
const initialValue = true;

export const { useShowBalanceValue, dispatchShowBalanceValue } = createReStateMethods(key, initialValue);
