import { Routes, Route } from "react-router-dom";
import AccountNav from "../../components/accountNav/AccountNav";
import styles from './Account.module.css';

const Account = () => {
  return (
    <div className={styles.account}>
      <AccountNav />

      <div>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/enderecos" element={null} />
          <Route path="/pedidos" element={null} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
