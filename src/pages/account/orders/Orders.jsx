import Order from "../../../components/order/Order";
import styles from "../Account.module.css";

const ordersData = [
	{
		id: 110526500,
		data: new Date("05/05/2023"),
		total: 599.97,
		items: [
			{
				id: 1,
				name: "Óculos Addis",
				price: 199.99,
				color: "preto",
				quantity: 10,
				imgSrc:
					"https://raw.githubusercontent.com/samueldbferreira/storeImages/main/uploads/addis.png",
			},
			{
				id: 1,
				name: "Óculos Addis",
				price: 199.99,
				color: "preto",
				quantity: 10,
				imgSrc:
					"https://raw.githubusercontent.com/samueldbferreira/storeImages/main/uploads/addis.png",
			},
		],
	},
];

const Orders = () => {
	return (
		<div>
			<ul className={styles.orders}>
				{ordersData.map((order) => {
					return (
						<li key={order.id}>
							<Order data={order} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Orders;
