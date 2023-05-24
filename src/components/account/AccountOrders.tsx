import Order from "../orders/Order";

import { IOrder } from '../orders/Orders.interfaces';

import styles from './AccountOrders.module.css';


const ordersData: IOrder[] = [
    {
        numPedido: 110526500,
        data: new Date('05/05/2023'),
        total: 599.97,
        items: [
            {
                imgSrc: 'https://raw.githubusercontent.com/samueldbferreira/storeImages/main/uploads/addis.png',
                nome: 'Óculos Addis',
                cor: 'preto',
                quantidade: 1,
                valorUnitario: 199.99
            },
            {
                imgSrc: 'https://raw.githubusercontent.com/samueldbferreira/storeImages/main/uploads/addis.png',
                nome: 'Óculos Addis 2',
                cor: 'vermelho',
                quantidade: 2,
                valorUnitario: 299.99
            }
        ]
    },
    {
        numPedido: 23426500,
        data: new Date('6/2/2023'),
        total: 199.99,
        items: [
            {
                imgSrc: 'https://raw.githubusercontent.com/samueldbferreira/storeImages/main/uploads/addis.png',
                nome: 'Óculos Addis',
                cor: 'preto',
                quantidade: 1,
                valorUnitario: 199.99
            }
        ]
    }
]

const AccountOrders = () => {
    return (
        <ul className={styles.orders}>
            {
                ordersData.map((order) => {
                    return (
                        <li>
                            <Order orderData={order} />
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default AccountOrders;
