export const onlyKeysWithTruthyValue = (obj: Record<string, any>) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => Boolean(value)));
};

export const onlyKeysWithTruthyValueAndConvertToString = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => Boolean(value) || value === 0)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return [key, value.map(v=>`${key}=${v}`).join('&')];
        }
        return [key, String(value)];
      })
  );
};

export const convertToSearchString = (obj: Record<string, any>) => {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};
