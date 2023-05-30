import { Route, Routes, Link } from 'react-router-dom';
import CustomerInfo from './info/CustomerInfo';
import CustomerAddresses from './addresses/CustomerAddresses';
import CustomerOrders from './orders/CustomerOrders';
import styles from './CustomerAccount.module.css';

const Account = () => {
    return (
        <div>
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
                    <Route path="/" element={<CustomerInfo />} />
                    <Route path="enderecos" element={<CustomerAddresses />} />
                    <Route path="pedidos" element={<CustomerOrders />} />
                </Routes>
            </div>
        </div>
    );
}

export default Account;
