import React from 'react';

const StatisticCard = ({
  value,
  label,
  className = '',
  valueClassName = '',
  labelClassName = '',
}) => (
  <div className={['flex flex-col', className].filter(Boolean).join(' ')}>
    <span
      className={[
        'text-3xl md:text-4xl font-black text-slate-900',
        valueClassName,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {value}
    </span>
    <span
      className={[
        'text-sm text-slate-600 font-medium uppercase tracking-wide',
        labelClassName,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </span>
  </div>
);

export default StatisticCard;

