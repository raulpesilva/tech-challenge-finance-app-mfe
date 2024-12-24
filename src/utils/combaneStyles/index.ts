export const combaneStyles = (styles: (string | undefined | boolean)[]) =>
  styles.filter(Boolean).join(" ");
