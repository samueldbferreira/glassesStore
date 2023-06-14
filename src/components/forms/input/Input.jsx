import styles from './Input.module.css';

const Input = ({ label, type, id, value, setValue, disabled }) => {
    return (
        <div className={styles.inputContainer}>
            {!value && <label className={styles.label} htmlFor={id}>{label}</label>}
            <input 
                className={styles.input}
                type={type}
                name={id}
                id={id}
                value={value}
                disabled={disabled}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
        </div>
    );
}

export default Input
