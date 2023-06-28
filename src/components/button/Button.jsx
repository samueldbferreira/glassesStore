import styles from "./Button.module.css";

const Button = ({ value, icon, style, color, onClick }) => {
  return (
    <button
      className={`${styles.button} ${style && styles[style]} ${
        color && styles[color]
      }`}
      onClick={onClick}
    >
      {value}
      {icon && <img src={icon} />}
    </button>
  );
};

export default Button;
