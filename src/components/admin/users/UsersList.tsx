import UserItem from './UserItem';

import { IUserItem } from './Users.interfaces';

import styles from './UsersList.module.css';


const data: IUserItem[] = [
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

const UsersList = () => {
  return (
    <ul className={styles.list}>
        {
            data.map((user) => {
                return (
                    <UserItem data={user} />
                )
            })
        }
    </ul>
  )
}

export default UsersList
