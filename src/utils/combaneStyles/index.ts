export const combaneStyles = (styles: (string | undefined)[]) =>
  styles.filter(Boolean).join(" ");
