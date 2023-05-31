import styles from './Button.module.css';

const Button = ({ value, icon, style, classname, color, onClick }) => {
    return (
        <button 
            className={`
                ${styles.button}
                ${style && styles[style]}
                ${classname} 
                ${color && styles[color]}
            `}
            onClick={onClick}
        >
            {value}
            {icon && <img src={icon} />}
        </button>
    );
}

export default Button;
