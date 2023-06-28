import { NavLink } from "react-router-dom";

const AccountNav = () => {
	return (
		<nav>
			<NavLink to="/account/">Meus dados</NavLink>
			<NavLink to="/account/enderecos">Endereços</NavLink>
			<NavLink to="/account/pedidos">Pedidos</NavLink>
		</nav>
	);
};

export default AccountNav;
