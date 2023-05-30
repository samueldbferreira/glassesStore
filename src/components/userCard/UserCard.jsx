import nameSVG from '../../assets/admin/badge.svg';
import emailSVG from '../../assets/admin/mail.svg';
import idSVG from '../../assets/admin/fingerprint.svg';
import styles from './UserCard.module.css';

const userCard = ({ data }) => {
    return (
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
    );
}

export default userCard;
