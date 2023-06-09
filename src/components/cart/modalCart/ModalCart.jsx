import styles from './ModalCart.module.css';
import CartItem from '../cartItem/cartItem';
import Button from '../../forms/button/Button';
import rightSVG from '../../../assets/cart/arrow_forward_ios.svg';

const ModalCart = ({ setCartModal }) => {
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
          <li className={styles.item}>
            <CartItem />
          </li>

          <li className={styles.item}>
            <CartItem />
          </li>

          <li className={styles.item}>
            <CartItem />
          </li>
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
