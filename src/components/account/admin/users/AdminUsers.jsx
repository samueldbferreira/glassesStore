import React from 'react';
import { Link } from 'react-router-dom';
import TitleSearch from '../../../sectionTitle/search/TitleSearch';
import UserItem from '../../../userCard/UserCard';
import styles from './AdminUsers.module.css';

const AdminUsers = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        async function fetchUsers () {
            const response = await fetch(`http://localhost:3000/accounts?admin=false`);
            const data = await response.json();
            setUsers(data);
        }
        fetchUsers();
    }, []);

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
                    users.map((user) => {
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