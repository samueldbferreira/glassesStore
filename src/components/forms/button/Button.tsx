import styles from './Button.module.css';


interface ButtonInterface {
    value: string;
    icon?: string;
    style?: 'transparent';
    classname?: string;
    color?: string;
}

const Button = ({ value, icon, style, classname, color } : ButtonInterface) => {
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
