import { ConvertUnionToTuple } from '../utils';

export const CATEGORIES_TYPES = [
  'food',
  'house',
  'education',
  'sporadic expenses',
  'personal expenses',
  'taxes',
  'leisure',
  'other expenses',
  'income',
  'health',
  'insurance',
  'uncategorized',
  'financial services',
  'transportation',
] as const;

export const CATEGORIES_TYPES_DICTIONARY = {
  food: 'Alimentação',
  house: 'Casa',
  education: 'Educação',
  'sporadic expenses': 'Gastos Esporádicos',
  'personal expenses': 'Gastos Pessoais',
  taxes: 'Impostos',
  leisure: 'Lazer',
  'other expenses': 'Outros Gastos',
  income: 'Receita',
  health: 'Saúde',
  insurance: 'Seguros',
  uncategorized: 'Sem Categoria',
  'financial services': 'Serviços Financeiros',
  transportation: 'Transporte',
} as const;

export const CATEGORIES_TYPES_DICTIONARY_MAP = {
  Alimentação: 'food',
  Casa: 'house',
  Educação: 'education',
  'Gastos Esporádicos': 'sporadic expenses',
  'Gastos Pessoais': 'personal expenses',
  Impostos: 'taxes',
  Lazer: 'leisure',
  'Outros Gastos': 'other expenses',
  Receita: 'income',
  Saúde: 'health',
  Seguros: 'insurance',
  'Sem Categoria': 'uncategorized',
  'Serviços Financeiros': 'financial services',
  Transporte: 'transportation',
} as const;

export const CATEGORIES_TYPES_DICTIONARY_VALUES = Object.values(
  CATEGORIES_TYPES_DICTIONARY
) as CategoryTypeDictionaryValues;

export type CategoryOptions = typeof CATEGORIES_TYPES;
export type CategoryType = (typeof CATEGORIES_TYPES)[number];
export type CategoryTypeDictionary = typeof CATEGORIES_TYPES_DICTIONARY;
export type CategoryTypeDictionaryKey = keyof CategoryTypeDictionary;
export type CategoryTypeDictionaryValues = ConvertUnionToTuple<CategoryTypeDictionary[CategoryTypeDictionaryKey]>;
export type CategoryTypeDictionaryValue = CategoryTypeDictionaryValues[number];
