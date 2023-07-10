import { Routes, Route } from "react-router-dom";
import AccountNav from "./accountNav/AccountNav";
import Info from "./info/Info";
import Addresses from "./addresses/Addresses";
import Orders from "./orders/Orders";
import styles from "./Account.module.css";

const Account = () => {
	return (
		<div className={styles.account}>
			<AccountNav />

			<div className={styles.containerContent}>
				<Routes>
					<Route path="/" element={<Info />} />
					<Route path="/enderecos" element={<Addresses />} />
					<Route path="/pedidos" element={<Orders />} />
				</Routes>
			</div>
		</div>
	);
};

export default Account;
