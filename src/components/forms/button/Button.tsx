import styles from './Button.module.css';


interface ButtonInterface {
    value: string;
    icon?: string;
    style?: 'transparent';
    classname?: string;
}

const Button = ({ value, icon, style, classname } : ButtonInterface) => {
    return (
        <button className={`${styles.button} ${style && styles[style]} ${classname}`}>
            {value}
            {icon && <img src={icon} />}
        </button>
    );
}

export default Button;
