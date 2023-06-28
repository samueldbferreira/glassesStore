import styles from "./Quantity.module.css";

function increment(max, quantity, setQuantity) {
  if (quantity < max) {
    setQuantity(quantity + 1);
  }
}

function decrement(min, quantity, setQuantity) {
  if (quantity > min) {
    setQuantity(quantity - 1);
  }
}

const Quantity = ({ min, max, quantity, setQuantity, small }) => {
  return (
    <div className={`${styles.container} ${small && styles["small"]}`}>
      <button
        className={`${styles.add} ${styles.box}`}
        onClick={(e) => {
          e.preventDefault();
          increment(max, quantity, setQuantity);
        }}
      ></button>

      <div className={`${styles.input} ${styles.box}`}>
        <p>{quantity}</p>
      </div>

      <button
        className={`${styles.remove} ${styles.box}`}
        onClick={(e) => {
          e.preventDefault();
          decrement(min, quantity, setQuantity);
        }}
      ></button>
    </div>
  );
};

export default Quantity;
