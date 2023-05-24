import OrderItem from './OrderItem';

import { IOrder } from './Orders.interfaces';

import styles from './Order.module.css';


const Order = ({ orderData }: { orderData: IOrder }) => {
    return (
        <div className={styles.order}>
            <ul className={styles.items}>
                {
                    orderData.items.map((item) => {
                        return (
                            <li>
                                <OrderItem data={item} />
                            </li>
                        );
                    })
                }
            </ul>

            <hr className={styles.separator} />

            <div className={styles.details}>
                <h2 className='mb-12'>Resumo da compra</h2>
                
                <span className={styles.text}>
                    <p>pedido: <strong>{orderData.numPedido}</strong></p>
                    <p>data do pedido: <strong>{orderData.data.getDay()}/{orderData.data.getMonth()}/{orderData.data.getFullYear()}</strong></p>
                    <p>valor total: <strong>R$ {orderData.total}</strong></p>
                </span>
            </div>
        </div>
    );
}

export default Order;
