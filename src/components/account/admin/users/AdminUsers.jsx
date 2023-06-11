import React from 'react';
import { Link } from 'react-router-dom';
import TitleSearch from '../../../sectionTitle/search/TitleSearch';
import UserItem from '../../../userCard/UserCard';
import styles from './AdminUsers.module.css';

const data = [
    {
        nome: 'Andreas Nikolaus Lauda',
        email: 'niki.lauda@usp.br',
        id: 12543565
    },
    {
        nome: 'Ayrton Senna da Silva',
        email: 'senna@usp.br',
        id: 12523112
    },
    {
        nome: 'Nelson Piquet Souto Maior',
        email: 'piquet@usp.br',
        id: 13513112
    },
    {
        nome: 'Emerson Fittipaldi',
        email: 'fittipaldi@usp.br',
        id: 99513112
    }
]

const AdminUsers = () => {
    const [query, setQuery] = React.useState('');

    return (
        <section>
            <TitleSearch
                title={'Usuários'}
                label={'id ou nome do usuário'}
                id='query'
                type={'text'}
                value={query}
                setValue={setQuery}
            />
        
            <ul className={styles.users}>
                {
                    data.map((user) => {
                        return (
                            <li className={styles.user} key={user.id}>
                                <UserItem data={user} />

                                <Link 
                                    to={`${user.id}`}
                                    className={styles.details}
                                >
                                    detalhes
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default AdminUsers;