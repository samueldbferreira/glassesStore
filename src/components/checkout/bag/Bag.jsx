import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import CartItem from '../../cart/cartItem/cartItem';
import Button from '../../forms/button/Button';
import rightSVG from '../../../assets/cart/arrow_forward_ios.svg';
import styles from './Bag.module.css';

const Bag = () => {
  const { cartItems, setCartItems, subtotal } = React.useContext(UserContext);

  const navigate = useNavigate();

  return (
    <section className={`${styles.gridBag} ${styles.container}`}>
      <div>
        <h2 className={styles.titleBag}>SACOLA DE COMPRAS</h2>

        <ul className={`${styles.items} ${styles.content}`}>
          {
            Object.values(cartItems).map((item) => {
              return (
                <li key={`${item.id},${item.color}`} className={styles.item}>
                  <CartItem
                    changeQuantity={true}
                    remove={true}
                    data={item}
                    cart={cartItems}
                    setCart={setCartItems}
                  />
                </li>
              );
            })
          }
        </ul>
      </div>

      <div>
        <h2 className={`${styles.titleResumo}`}>RESUMO DA COMPRA</h2>

        <div className={`${styles.content} ${styles.total}`}>
          <p>SUBTOTAL:</p>
          <p><strong>R$ {subtotal()}</strong></p>
        </div>

        <Button
          value={'IR PARA O PAGAMENTO'}
          icon={rightSVG}
          onClick={() => { navigate('/checkout/payment') }}
        />
      </div>
    </section>
  )
}

export default Bag
