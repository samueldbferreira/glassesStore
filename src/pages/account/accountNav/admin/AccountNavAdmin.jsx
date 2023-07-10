import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import styles from "../AccountNav.module.css";

const AccountNavAdmin = () => {
	const { logout } = React.useContext(UserContext);

	return (
		<nav className={styles.nav}>
			<div className={styles.options}>
				<NavLink to={"/conta/"} className={styles.link}>
					Meus dados
				</NavLink>
			</div>

			<a className={styles.logout} onClick={() => logout()}>
				<p>Sair</p>
				<i className={styles.logoutIcon} />
			</a>
		</nav>
	);
};

export default AccountNavAdmin;
