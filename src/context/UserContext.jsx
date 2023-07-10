import React from "react";
import { GET_ME, POST_LOGIN, POST_USER } from "../services/Api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
	const navigate = useNavigate();

	const [login, setLogin] = React.useState(false);
	const [userData, setUserData] = React.useState(null);

	async function getUser(token) {
		const { url, options } = GET_ME(token);

		const response = await fetch(url, options);

		const json = await response.json();

		setUserData(json);
		setLogin(true);
	}

	async function userLogin(email, password) {
		const { url, options } = POST_LOGIN({ email, password });

		const response = await fetch(url, options);
		const json = await response.json();

		if (response.ok) {
			window.localStorage.setItem("token", json.token);
			await getUser(json.token);
			navigate("/");
		}
	}

	async function userPost(body) {
		const { url, options } = POST_USER(body);

		const response = await fetch(url, options);

		if (response.ok) {
			userLogin(body.email, body.password);
		}
	}

	function logout() {
		if (!login) return;

		setLogin(false);
		setUserData(null);
		window.localStorage.removeItem("token");

		navigate("/");
	}

	React.useEffect(() => {
		const savedToken = window.localStorage.getItem("token");
		if (savedToken) {
			getUser(savedToken);
		}
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
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
