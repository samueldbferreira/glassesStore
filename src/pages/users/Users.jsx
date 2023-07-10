import React from "react";
import { Link } from "react-router-dom";
import TitleSearch from "../../components/titleSearch/TitleSearch";
import UserCard from "../../components/userCard/UserCard";
import styles from "./Users.module.css";
import { GET_USERS } from "../../services/Api";
import useFetch from "../../customHooks/useFetch";

const Users = () => {
	const { data, request } = useFetch();
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		const { url, options } = GET_USERS();

		async function fetchUsers() {
			const json = await request(url, options);
			setUsers(json);
		}
		fetchUsers();
	}, [request]);

	return (
		data && (
			<section>
				<TitleSearch
					title={"Usuários"}
					initial={data}
					data={users}
					setData={setUsers}
					searchAttributes={["firstName", "lastName", "email", "_id"]}
				/>

				<ul className={styles.users}>
					{users.map((user) => {
						return (
							<li className={styles.user} key={user._id}>
								<UserCard data={user} />

								<Link to={`${user._id}`} className={styles.details}>
									detalhes
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		)
	);
};

export default Users;
