import styles from './Button.module.css';

const Button = ({ value, icon, style, classname, color }) => {
    return (
        <button 
            className={`
                ${styles.button}
                ${style && styles[style]}
                ${classname} 
                ${color && styles[color]}
            `}>
            {value}
            {icon && <img src={icon} />}
        </button>
    );
}

export default Button;
