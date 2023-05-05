import styles from "./button.module.css";

const Button = (props: any) => {
  const {
    color = "primary",
    customStyle = "",
    children,
    onClick,
    disabled
  } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${styles[color]} ${customStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
