import React from "react";
import Quantity from "../../forms/quantity/Quantity";
import styles from './CartItem.module.css';
import deleteSVG from '../../../assets/cart/delete_forever.svg';

async function getProduct(item, setProduct) {
    const response = await fetch('http://localhost:3000/products?id=' + item.productid);
    const data = await response.json();
    setProduct(data[0]);

}

const CartItem = ({item}) => {
  const [quantity, setQuantity] = React.useState(0);
  const [stock, setStock] = React.useState(0);
  const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        getProduct(item, setProduct);
    }, [], );

  
  return (
    <div className={styles.item}>
      <div className={styles.image}>

      </div>

      <span className={styles.info}>
        <h2 className={styles.title}>{product.nome}</h2>
        <p>amarelo</p>
        <p>R$ {product.preco}</p>
      </span>

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
    </div>
  )
}

export default CartItem;
