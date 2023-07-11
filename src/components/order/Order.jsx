import CartItem from "../cartItem/CartItem";
import styles from "./Order.module.css";

const Order = ({ data }) => {
	const date = new Date(data.date);

	console.log();

	return (
		data && (
			<div className={styles.order}>
				<ul className={styles.items}>
					{data.items.map((item) => {
						return (
							<li key={item.id}>
								<CartItem
									data={item}
									remove={false}
									changeQuantity={false}
									controls={false}
								/>
							</li>
						);
					})}
				</ul>

				<hr className={styles.separator} />

				<div className={styles.details}>
					<h2 className="mb-12">Resumo da compra</h2>

					<span className={styles.text}>
						<p>
							pedido: <strong>{data._id}</strong>
						</p>
						<p>
							data do pedido:{" "}
							<strong>
								{date.getDay()}/{date.getMonth()}/{date.getFullYear()}
							</strong>
						</p>
						<p>
							valor total: <strong>R$ {data.total}</strong>
						</p>
					</span>
				</div>
			</div>
		)
	);
};

export default Order;
