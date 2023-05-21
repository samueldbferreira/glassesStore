import React from 'react';

import styles from './Input.module.css';


interface InputInterface {
    label: string;
    type: string;
    id: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ label, type, id, value, setValue } : InputInterface) => {
    const [lbl, setLbl] = React.useState(label);

    function hideLabel () {
        setLbl('');
    }

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
    }

    function handleBlur () {
        if (value === '') {
            setLbl(label);
        }
    }

    return (
        <div className={styles.inputContainer} onFocus={hideLabel}>
            <label className={styles.label} htmlFor={id}>{lbl}</label>
            <input 
                className={styles.input}
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default Input;
