import Order from '../../../order/Order';
import styles from '../CustomerAccount.module.css';

const ordersData = [
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

const CustomerOrders = () => {
    return (
        <ul className={styles.orders}>
        </ul>
    );
}

export default CustomerOrders;
