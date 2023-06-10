import CartItem from '../cart/cartItem/CartItem';
import styles from './Order.module.css';

const Order = ({ data }) => {
    return (
        <div className={styles.order}>
            <ul className={styles.items}>
                {
                    data.items.map((item) => {
                        return (
                            <li key={item.nome}>
                                <CartItem controls={false} />
                            </li>
                        );
                    })
                }
            </ul>

            <hr className={styles.separator} />

            <div className={styles.details}>
                <h2 className='mb-12'>Resumo da compra</h2>
                
                <span className={styles.text}>
                    <p>pedido: <strong>{data.numPedido}</strong></p>
                    <p>data do pedido: <strong>{data.data.getDay()}/{data.data.getMonth()}/{data.data.getFullYear()}</strong></p>
                    <p>valor total: <strong>R$ {data.total}</strong></p>
                </span>
            </div>
        </div>
    );
}

export default Order;
