import styles from "./TextArea.module.css";

const TextArea = ({ label, id, cols, rows, value, setValue }) => {
  return (
    <div className={styles.inputContainer}>
      {!value && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <textarea
        className={styles.input}
        name={id}
        id={id}
        cols={cols}
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
