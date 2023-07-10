import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DELETE_USER, GET_USER } from "../../services/Api";
import TitleID from "../../components/titleID/TitleID";
import UserCard from "../../components/userCard/UserCard";
import styles from "./User.module.css";

const User = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [userData, setUserData] = React.useState(null);

	React.useEffect(() => {
		const { url, options } = GET_USER(id);

		async function fetchData() {
			const response = await fetch(url, options);
			const data = await response.json();
			setUserData(data);
		}
		fetchData();
	}, [id]);

	async function handleDelete(e) {
		e.preventDefault();

		if (window.confirm("Deseja realmente excluir este usuário?")) {
			const { url, options } = DELETE_USER(id);

			const response = await fetch(url, options);
			const json = await response.json();

			window.alert(json.msg);

			if (response.ok) {
				navigate("/usuarios");
			}
		}
	}

	return (
		userData && (
			<section>
				<TitleID title="Usuário" />

				<div className={styles.content}>
					<div className={`${styles.info}`}>
						<div>
							<h2 className={`${styles.subtitle}`}>Dados Pessoais</h2>
							<UserCard data={userData} />
						</div>

						<a className={styles.remove} onClick={handleDelete}>
							<p>REMOVER</p>
							<i className={styles.removeIcon} />
						</a>
					</div>

					<div>
						<h2 className={`${styles.subtitle}`}>Pedidos</h2>

						<ul className={styles.orders}></ul>
					</div>
				</div>
			</section>
		)
	);
};

export default User;
