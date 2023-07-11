import React from "react";
import Order from "../../../components/order/Order";
import styles from "../Account.module.css";
import { GET_ORDERS } from "../../../services/Api";

const Orders = () => {
	const [orders, setOrders] = React.useState(null);

	React.useEffect(() => {
		const { url, options } = GET_ORDERS();

		async function fetchOrders() {
			const res = await fetch(url, options);
			const json = await res.json();
			setOrders(json);
		}
		fetchOrders();
	}, []);

	return (
		orders && (
			<div>
				<ul className={styles.orders}>
					{orders.map((order) => {
						return (
							<li key={order._id}>
								<Order data={order} />
							</li>
						);
					})}
				</ul>
			</div>
		)
	);
};

export default Orders;
