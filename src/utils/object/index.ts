export const onlyKeysWithTruthyValue = (obj: Record<string, any>) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => Boolean(value)));
};

export const onlyKeysWithTruthyValueAndConvertToString = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => Boolean(value) || value === 0)
      .map(([key, value]) => {
        if (Array.isArray(value)) return [key, value.join(',')];
        return [key, String(value)];
      })
  );
};
