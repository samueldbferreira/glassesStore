import React from "react";
import Quantity from "../../forms/quantity/Quantity";
import styles from './CartItem.module.css';
import deleteSVG from '../../../assets/cart/delete_forever.svg';

const CartItem = ({ controls }) => {
  const [quantity, setQuantity] = React.useState(0);
  const [stock, setStock] = React.useState(10);
  
  return (
    <div className={styles.item}>
      <div className={styles.image}>

      </div>

      <span className={styles.info}>
        <h2 className={styles.title}>Óculos Addis</h2>
        <p>amarelo</p>
        <p>R$ 199,99</p>
      </span>

      {
        controls
        ?
        <span className={styles.controls}>
          <a className={styles.remove}>
            <img src={deleteSVG} />
          </a>
          <Quantity
            small={true}
            quantity={quantity}
            setQuantity={setQuantity}
            max={stock}
          />
        </span>
        :
        <span className={styles.quantity}>
          {quantity}
        </span>
      }
    </div>
  )
}

export default CartItem;
