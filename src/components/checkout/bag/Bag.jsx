import { useNavigate } from 'react-router-dom';
import CartItem from '../../cart/cartItem/cartItem';
import Button from '../../forms/button/Button';
import rightSVG from '../../../assets/cart/arrow_forward_ios.svg';
import styles from './Bag.module.css';

const Bag = () => {
  const navigate = useNavigate();

  return (
    <section className={`${styles.gridBag} ${styles.container}`}>
      <div>
        <h2 className={`mb-28`}>SACOLA DE COMPRAS</h2>

        <ul className={`${styles.items} ${styles.content}`}>
          <li className={styles.item}>
            <CartItem controls={true} />
          </li>

          <li className={styles.item}>
            <CartItem controls={true} />
          </li>

          <li className={styles.item}>
            <CartItem controls={true} />
          </li>
        </ul>
      </div>

      <div>
        <h2 className={`${styles.center} mb-28`}>RESUMO DA COMPRA</h2>

        <div className={`${styles.content} ${styles.total} mb-44`}>
          <p>SUBTOTAL:</p>
          <p><strong>R$ 599,99</strong></p>
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
