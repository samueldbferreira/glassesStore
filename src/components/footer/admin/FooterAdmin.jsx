import { Link } from 'react-router-dom';
import styles from './FooterAdmin.module.css';

const FooterAdmin = () => {
    return (
        <footer className={styles.footer}>
            <Link to='/admin'>
                <i className={styles.logo} />
            </Link>
        </footer>
    );
}

export default FooterAdmin
