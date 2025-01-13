export const combineStyles = (styles: (string | undefined | boolean)[]) => styles.filter(Boolean).join(' ');
