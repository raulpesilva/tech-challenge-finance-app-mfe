'use client';

import { Transaction } from '@/@types/transaction';
import { formatCurrency } from '@/utils/formatCurrency';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface ReviewChartProps {
  transactions: Transaction[];
}

const fontSize = 14;
const fontColor = '#8b8b8b';
const tooltipBackground = '#ffffff';
const tooltipBorder = '#8b8b8b';
const tooltipShadow = '#00000019';
const depositColor = '#004d61';
const withdrawColor = '#ff5031';
const investmentColor = '#47a138';
const transferColor = '#bf1313';

const renderCustomLabel = (props: any) => {
  const { x, y, width, value } = props;

  return (
    <text x={x + width / 2} y={y - 10} fill={fontColor} textAnchor='middle' fontSize={fontSize}>
      {formatCurrency(value)}
    </text>
  );
};

export const ReviewChart = ({ transactions }: ReviewChartProps) => {
  const values = transactions.reduce(
    (acc, transaction) => {
      const type = transaction.type;
      const value = transaction.value / 100;

      if (type === 'deposit') {
        if (!acc['deposit']) return { ...acc, deposit: { name: 'Depósito', Valor: value, color: depositColor } };
        return { ...acc, deposit: { ...acc['deposit'], Valor: acc['deposit'].Valor + value } };
      }

      if (type === 'withdraw') {
        if (!acc['withdraw']) return { ...acc, withdraw: { name: 'Retirada', Valor: value, color: withdrawColor } };
        return { ...acc, withdraw: { ...acc['withdraw'], Valor: acc['withdraw'].Valor + value } };
      }

      if (type === 'investment') {
        if (!acc['investment'])
          return {
            ...acc,
            investment: { name: 'Investimento', Valor: value, color: investmentColor },
          };
        return {
          ...acc,
          investment: { ...acc['investment'], Valor: acc['investment'].Valor + value },
        };
      }

      if (type === 'transfer') {
        if (!acc['transfer'])
          return { ...acc, transfer: { name: 'Transferência', Valor: value, color: transferColor } };
        return { ...acc, transfer: { ...acc['transfer'], Valor: acc['transfer'].Valor + value } };
      }

      return acc;
    },
    {} as { [key: string]: { name: string; Valor: number; color: string } }
  );

  const data = Object.values(values);

  return (
    <ResponsiveContainer width='100%' height={320}>
      <BarChart data={data}>
        <XAxis dataKey='name' tick={{ fill: fontColor, fontSize }} />

        <YAxis
          width={80}
          tick={{ fill: fontColor, fontSize }}
          tickFormatter={(value) => formatCurrency(Number(value)).replace('R$ ', 'R$')}
        />

        <Tooltip
          formatter={(value) => formatCurrency(Number(value))}
          cursor={{ fill: tooltipShadow }}
          contentStyle={{
            backgroundColor: tooltipBackground,
            border: `1px solid ${tooltipBorder}`,
            borderRadius: '8px',
            padding: '8px',
          }}
        />

        <Bar dataKey='Valor' radius={[8, 8, 0, 0]} label={renderCustomLabel} barSize={24}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
