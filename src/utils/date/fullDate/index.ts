const DICTIONARY_DAYS_WEEK = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export const fullDate = () => {
  const date = new Date();
  const dayWeek = date.getDay();
  const shortDate = new Date().toLocaleString('pt-BR', { dateStyle: 'short' });

  return `${DICTIONARY_DAYS_WEEK[dayWeek]}, ${shortDate}`;
};
