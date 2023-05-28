import { Link } from 'react-router-dom';

import nameSVG from '../../../assets/admin/badge.svg';
import emailSVG from '../../../assets/admin/mail.svg';
import idSVG from '../../../assets/admin/fingerprint.svg';

import { IUserItem } from './Users.interfaces';

import styles from './UserItem.module.css';


const UserItem = ({ data }: { data: IUserItem }) => {
  return (
    <div className={styles.user}>
        <ul className={styles.info}>
            <li className={styles.infoItem}>
                <img src={nameSVG}/>
                <p>{data.nome}</p>
            </li>

            <li className={styles.infoItem}>
                <img src={emailSVG}/>
                <p>{data.email}</p>
            </li>

            <li className={styles.infoItem}>
                <img src={idSVG}/>
                <p>{data.id}</p>
            </li>
        </ul>

        <Link 
            to={`${data.id}`}
            className={styles.details}
        >
            detalhes
        </Link>
    </div>
  )
}

export default UserItem
