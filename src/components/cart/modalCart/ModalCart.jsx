import styles from './ModalCart.module.css';
import CartItem from '../cartItem/cartItem';
import Button from '../../forms/button/Button';
import rightSVG from '../../../assets/cart/arrow_forward_ios.svg';
import AddressCard from "../../addresses/addressCard/AddressCard.jsx";
import React from "react";
import cartItem from "../cartItem/cartItem";




// const cartitems = [
//   {
//     id: 1,
//     productid: 1
//   },
//   {
//     id: 2,
//     productid: 1
//   }
// ]

async function getCartitems(setCartitems) {
  const response = await fetch('http://localhost:3000/cart');
  const data = await response.json();
  setCartitems(data);
}

const ModalCart = ({ setCartModal }) => {
  const [cartitems, setCartitems] = React.useState([]);

  React.useEffect(() => {
    getCartitems(setCartitems);
  }, [], );
  function closeModal () {
    setCartModal(false);
  }
  
  function outsideClick (e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return (
    <div className={styles.modal} onClick={outsideClick}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>SACOLA</h1>
          <span className={styles.closeIcon} onClick={closeModal}>
          </span>
        </div>

        <ul className={styles.items}>

          {/*  <li className={styles.item}>*/}
          {/*  <CartItem />*/}
          {/*</li>*/}

          {/*<li className={styles.item}>*/}
          {/*  <CartItem />*/}
          {/*</li>*/}

          {/*<li className={styles.item}>*/}
          {/*  <CartItem />*/}
          {/*</li>*/}
          {cartitems.map(item=>
              <CartItem item={item} key={item.id}/>
          )}

        </ul>

        <div className={styles.buy}>
          <div className={styles.subtotal}>
            <p>SUBTOTAL:</p>
            <p><strong>R$ 599,99</strong></p>
          </div>

          <Button value={'FINALIZAR COMPRA'} icon={rightSVG}></Button>
        </div>
      </div>
    </div>
  )
}

export default ModalCart;
