'use client';

import { CSSProperties, useEffect, useState } from 'react';
import { Legend, Pie, PieChart } from 'recharts';

const DATA = [
  {
    name: 'Fundos de investimento',
    value: 400,
    fill: '#2567F9',
  },
  {
    name: 'Tesouro Direto',
    value: 300,
    fill: '#8F3CFF',
  },
  {
    name: 'Previdência Privada',
    value: 300,
    fill: '#FF3C82',
  },
  {
    name: 'Bolsa de Valores',
    value: 200,
    fill: '#F1823D',
  },
];

const HEIGHT_DESKTOP = 130;
const CHART_WIDTH = 127;
const CHART_HEIGHT = 127;
const HEIGHT_MOBILE = CHART_HEIGHT * 2 + 32;

const style: CSSProperties = {
  lineHeight: '32px',
  minWidth: 'fit-content',
  width: 'fit-content',
};

export const InvestmentChart = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const element = document.getElementById('investment-chart');
      if (!element) return;
      setWindowWidth(element.clientWidth - 32);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowWidth < 390) {
    return (
      <PieChart width={windowWidth} height={HEIGHT_MOBILE}>
        <Pie
          data={DATA}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy={CHART_HEIGHT / 2}
          innerRadius={40}
          outerRadius={60}
          strokeWidth={0}
        />
        <Legend
          iconSize={10}
          layout='vertical'
          verticalAlign='middle'
          cx='50%'
          wrapperStyle={{ ...style, top: CHART_HEIGHT + 32 }}
          stroke='0'
        />
      </PieChart>
    );
  }

  return (
    <PieChart width={windowWidth} height={HEIGHT_DESKTOP}>
      <Pie
        data={DATA}
        dataKey='value'
        nameKey='name'
        cx={CHART_WIDTH / 2}
        cy={CHART_HEIGHT / 2}
        innerRadius={40}
        outerRadius={60}
        strokeWidth={0}
      />
      <Legend
        iconSize={10}
        layout='vertical'
        verticalAlign='middle'
        wrapperStyle={{
          ...style,
          left: CHART_WIDTH + 32,
        }}
        stroke='0'
      />
    </PieChart>
  );
};
