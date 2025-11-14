export const formatCounterValue = (value, { prefix = '', suffix = '' } = {}) => {
  const sanitizedValue = Number.isFinite(value) ? Math.round(value) : 0;
  return `${prefix}${sanitizedValue}${suffix}`;
};

export default formatCounterValue;

