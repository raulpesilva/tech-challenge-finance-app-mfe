import styles from './styles.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
