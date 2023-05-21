import styles from './Account.module.css';

import { Route, Routes, Link } from 'react-router-dom';

import AccountData from './AccountData';
import AccountAddresses from './AccountAddresses';
import AccountOrders from './AccountOrders';


const Account = () => {
    return (
        <div className={styles.main}>
            <nav className={styles.nav}>
                <Link to={'/account'} className={styles.link}>
                    Meus dados
                </Link>

                <Link to={'enderecos'} className={styles.link}>
                    Endereços
                </Link>

                <Link to={'pedidos'} className={styles.link}>
                    Pedidos
                </Link>
            </nav>

            <div className={styles.containerContent}>
                <Routes>
                    <Route path="/" element={<AccountData />} />
                    <Route path="enderecos" element={<AccountAddresses />} />
                    <Route path="pedidos" element={<AccountOrders />} />
                </Routes>
            </div>
        </div>
    );
}

export default Account;
