import React from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import SearchBar from "../../searchBar/SearchBar";
import MenuModal from "./menuModal/MenuModal";
import CartModal from "./cartModal/CartModal";
import styles from "./HeaderCustomer.module.css";

const HeaderCustomer = () => {
	const { login } = React.useContext(UserContext);

	const navigate = useNavigate();

	const [mobile, setMobile] = React.useState(false);
	const [menuModal, setMenuModal] = React.useState(false);
	const [cartModal, setCartModal] = React.useState(false);

	React.useEffect(() => {
		function checkResize() {
			setMobile(window.matchMedia("(max-width: 840px)").matches);
		}

		window.addEventListener("resize", checkResize);

		checkResize();

		return () => {
			window.removeEventListener("resize", checkResize);
		};
	}, [mobile]);

	return (
		<header className={styles.header}>
			<div className={`container`}>
				<div className={styles.headerSupra}>
					{mobile ? (
						<a onClick={() => setMenuModal(true)}>
							<i className={styles.menuIcon} />
						</a>
					) : (
						<SearchBar />
					)}

					<Link to={"/"} className={styles.logo} />

					<nav className={styles.supraList}>
						{mobile ? null : login ? (
							<a
								onClick={() => {
									navigate("/conta/");
								}}
								className={styles.login}
							>
								<p className={styles.supraLabel}>conta</p>
								<i className={styles.accountIcon} />
							</a>
						) : (
							<a
								onClick={() => {
									navigate("/login");
								}}
								className={styles.login}
							>
								<p className={styles.supraLabel}>entrar</p>
								<i className={styles.loginIcon} />
							</a>
						)}
						<a
							onClick={() => {
								setCartModal(true);
							}}
						>
							{!mobile && <p className={styles.supraLabel}>sacola</p>}
							<i className={styles.bagIcon} />
						</a>
					</nav>
				</div>
			</div>

			<div className={`${styles.headerInfra}`}>
				{mobile ? (
					<SearchBar />
				) : (
					<nav className={`container ${styles.infraList}`}>
						<NavLink to={"/feminino"} className={styles.linkMenu}>
							feminino
						</NavLink>

						<NavLink to={"/masculino"} className={styles.linkMenu}>
							masculino
						</NavLink>

						<NavLink to={"/oculos-de-grau"} className={styles.linkMenu}>
							óculos de grau
						</NavLink>

						<NavLink to={"/oculos-de-sol"} className={styles.linkMenu}>
							óculos de sol
						</NavLink>

						<NavLink to={"/oculos-anti-luz-azul"} className={styles.linkMenu}>
							óculos anti luz azul
						</NavLink>
					</nav>
				)}
			</div>

			{mobile && menuModal && <MenuModal setMenuModal={setMenuModal} />}

			{cartModal && <CartModal setCartModal={setCartModal} />}
		</header>
	);
};

export default HeaderCustomer;
