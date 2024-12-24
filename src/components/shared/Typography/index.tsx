import { combaneStyles } from "@/utils/combaneStyles";
import styles from "./styles.module.scss";

const variants = {
  heading1: { weight: styles.bold, size: styles.size2xl },
  heading2: { weight: styles.bold, size: styles.sizeXl },
  heading3: { weight: styles.bold, size: styles.sizeLg },
  heading4: { weight: styles.bold, size: styles.sizeBase },
  paragraph: { weight: styles.regular, size: styles.sizeBase },
  label: { weight: styles.bold, size: styles.sizeBase },
};

const componentVariants = {
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  paragraph: "p",
  label: "label",
} as const;

const sizes = {
  "4xl": styles.size4xl, // 32px
  "3xl": styles.size3xl, // 28px
  "2xl": styles.size2xl, // 24px
  xl: styles.sizeXl, // 20px
  lg: styles.sizeLg, // 18px
  base: styles.sizeBase, // 16px
  sm: styles.sizeSm, // 14px
  xs: styles.sizeXs, // 12px
};

const weights = {
  bold: styles.bold,
  semiBold: styles.semiBold,
  regular: styles.regular,
};

const colors = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  gray400: styles.gray400,
  gray600: styles.gray600,
};

interface TypographyProps {
  children: React.ReactNode;
  variant: keyof typeof variants;
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
  color?: keyof typeof colors;
}

export const Typography = ({
  children,
  variant = "paragraph",
  size,
  weight,
  color = "primary",
}: TypographyProps) => {
  const Component = componentVariants[variant] ?? "p";

  return (
    <Component
      className={combaneStyles([
        size ? sizes[size] : variants[variant]?.size,
        weight ? weights[weight] : variants[variant]?.weight,
        colors[color],
      ])}
    >
      {children}
    </Component>
  );
};
