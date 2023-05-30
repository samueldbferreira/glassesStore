import { Link } from 'react-router-dom';
import smallLogoSVG from '../../../assets/logo/logo-w-small.svg';
import styles from './FooterAdmin.module.css';

const FooterAdmin = () => {
    return (
        <footer className={styles.footer}>
            <Link to='/admin'>
                <img src={smallLogoSVG} alt="Logo Fozoco" />
            </Link>
        </footer>
    );
}

export default FooterAdmin
