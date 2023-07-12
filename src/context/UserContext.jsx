import React from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { GET_ADDRESSES, GET_ME, POST_LOGIN, POST_USER } from "../services/Api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
	const { onPayment, setOnPayment } = React.useContext(CartContext);
	const navigate = useNavigate();

	const [login, setLogin] = React.useState(false);
	const [userData, setUserData] = React.useState(null);
	const [addresses, setAddresses] = React.useState(null);

	async function getUser(token) {
		const { url, options } = GET_ME(token);

		let response = await fetch(url, options);
		let json = await response.json();

		setUserData(json);
		setLogin(true);

		if (json.admin) {
			return navigate("/produtos");
		} else {
			if (onPayment) {
				const fetchAdresses = GET_ADDRESSES();

				response = await fetch(fetchAdresses.url, fetchAdresses.options);
				json = await response.json();

				setAddresses(json);

				if (json.length > 0) {
					return navigate("/checkout/pagamento");
				} else {
					return navigate("/novo-endereco");
				}
			}

			return navigate("/");
		}
	}

	async function userLogin(email, password) {
		const { url, options } = POST_LOGIN({ email, password });

		const response = await fetch(url, options);
		const json = await response.json();

		if (response.ok) {
			window.localStorage.setItem("token", json.token);
			await getUser(json.token);
		}
	}

	async function userPost(body) {
		const { url, options } = POST_USER(body);

		const response = await fetch(url, options);
		const json = await response.json();

		if (response.ok) {
			userLogin(body.email, body.password);
		} else {
			return window.alert(json.msg);
		}
	}

	function logout() {
		if (!login) return;

		setLogin(false);
		setUserData(null);
		setOnPayment(false);
		window.localStorage.removeItem("token");

		navigate("/");
	}

	React.useEffect(() => {
		const savedToken = window.localStorage.getItem("token");
		if (savedToken) {
			getUser(savedToken);
		}

		return () => setOnPayment(false);
	}, []);

	return (
		<UserContext.Provider
			value={{
				login,
				userData,
				setUserData,
				userPost,
				userLogin,
				logout,
				addresses,
				setAddresses,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
