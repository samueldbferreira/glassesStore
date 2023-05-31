import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, id, value, setValue, disabled }) => {
    const [lbl, setLbl] = React.useState(label);

    function hideLabel () {
        setLbl('');
    }

    function handleChange (e) {
        setValue(e.currentTarget.value);
    }

    function handleBlur () {
        if (value === '') {
            setLbl(label);
        }
    }    

    return (
        <div className={styles.inputContainer} onFocus={hideLabel}>
            {!value && <label className={styles.label} htmlFor={id}>{lbl}</label>}
            <input 
                className={styles.input}
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
            />
        </div>
    );
}

export default Input
