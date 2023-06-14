import { Link, useParams } from 'react-router-dom';
import TitleID from '../../../sectionTitle/id/TitleID';
import UserCard from '../../../userCard/UserCard';
import Order from '../../../order/Order';
import styles from './AdminUser.module.css';
import React from 'react';

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
];

const AdminUser = () => {
    const { id } = useParams();

    const [userData, setUserData] = React.useState(null);
    //const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        async function fetchData () {
            const response = await fetch(`http://localhost:3000/accounts/${id}`);
            const data = await response.json();
            setUserData(data);
        }
        fetchData();
    }, [id]);

    return (
        userData
        &&
        <section>
            <TitleID
                title='Usuário'
            />

            <div className={styles.content}>
                <div className={`${styles.info}`}>
                    <div>
                        <h2 className={`${styles.subtitle}`}>Dados Pessoais</h2>

                        <UserCard data={userData} />
                    </div>

                    <Link
                        to={'#'}
                        className={styles.remove}
                    >
                        <p>REMOVER</p>
                        <i className={styles.removeIcon} />
                    </Link>
                </div>

                <div>
                    <h2 className={`${styles.subtitle}`}>Pedidos</h2>

                    <ul className={styles.orders}>                    
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AdminUser;
