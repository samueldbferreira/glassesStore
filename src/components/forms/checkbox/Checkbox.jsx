import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, value, setValue }) => {
    return (
        <div className={styles.checkContainer}>
            <input 
                className={styles.check}
                type="checkbox"
                name={id}
                id={id}
                checked={value}
                onChange={(e) => {
                    setValue(e.target.checked);
                }}
            />
            <label 
                className={styles.label}
                htmlFor={id}>{label}
            </label>
        </div>
    );
}

export default Checkbox;
