export const onlyKeysWithTruthyValue = (obj: Record<string, any>) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => Boolean(value)));
};

export const onlyKeysWithTruthyValueAndConvertToString = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => Boolean(value))
      .map(([key, value]) => [key, String(value)])
  );
};
