import { Link, useParams } from 'react-router-dom';
import TitleID from '../../../sectionTitle/id/TitleID';
import UserCard from '../../../userCard/UserCard';
import Order from '../../../order/Order';
import removeSVG from '../../../../assets/admin/person_remove.svg';

import styles from './AdminUser.module.css';

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

const data = {
    nome: 'Andreas Nikolaus Lauda',
    email: 'niki.lauda@usp.br',
    id: 12543565
}

const AdminUser = () => {
    const { id } = useParams();

    if (!id) return null;

    return (
        <section>
            <TitleID
                title='Usuário'
                id={id}
            />

            <div className={styles.content}>
                <div className={`mb-52 ${styles.info}`}>
                    <div>
                        <h2 className={`${styles.subtitle} mb-20`}>Dados Pessoais</h2>

                        <UserCard data={data} />
                    </div>

                    <Link
                        to={'#'}
                        className={styles.remove}
                    >
                        <p>REMOVER</p>
                        <img src={removeSVG} />
                    </Link>
                </div>

                <div>
                    <h2 className={`${styles.subtitle} mb-20`}>Pedidos</h2>

                    <ul className={styles.orders}>
                        {
                            ordersData.map((order) => {
                                return (
                                    <li key={order.numPedido}>
                                        <Order data={order} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AdminUser;
