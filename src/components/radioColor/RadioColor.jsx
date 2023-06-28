import React from "react";
import styles from "./RadioColor.module.css";

const RadioColor = ({ colors, setValue }) => {
  const selectedItem = React.useRef();

  function handleClick(colorName) {
    return (e) => {
      setValue(colorName);
      selectedItem.current?.classList.remove(styles["active"]);
      selectedItem.current = e.currentTarget;
      selectedItem.current.classList.add(styles["active"]);
    };
  }

  return (
    <ul className={styles.colorsList}>
      {colors.map((color, i) => {
        return (
          <li key={i}>
            <div className={styles.radio} onClick={handleClick(color.nome)}>
              <p>{color.nome}</p>
              <div
                className={styles.cor}
                style={{ backgroundColor: color.hexa }}
              ></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default RadioColor;
