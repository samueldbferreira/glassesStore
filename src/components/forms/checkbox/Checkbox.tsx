import React from 'react';

import styles from './Checkbox.module.css';


interface CheckboxInterface {
    id: string;
    label: string;
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({ id, label, value, setValue }: CheckboxInterface) => {
    return (
        <div className={styles.checkContainer}>
            <input 
                className={styles.check}
                type="checkbox"
                name={id}
                id={id}
                checked={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
