import React from "react";
import Quantity from "../quantity/Quantity";
import styles from "./CartItem.module.css";
import deleteSVG from "../../assets/cart/delete_forever.svg";

const CartItem = ({ remove, changeQuantity, data, cart, setCart }) => {
	const [quantity, setQuantity] = React.useState(data.quantity);

	function removeItem() {
		let newCart = { ...cart };
		delete newCart[data.id];
		setCart(newCart);
	}

	React.useEffect(() => {
		if (!cart || !setCart) return;

		let newCart = { ...cart };
		newCart[data.id].quantity = quantity;
		setCart(newCart);
	}, [quantity]);

	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<img src={data.imgSrc} />
			</div>

			<span className={styles.info}>
				<h2 className={styles.title}>{data.name}</h2>
				<p>{data.color}</p>
				<p>R$ {data.price}</p>
			</span>

			<span className={styles.controls}>
				{remove && (
					<a className={styles.remove} onClick={removeItem}>
						<img src={deleteSVG} />
					</a>
				)}
				{changeQuantity ? (
					<Quantity
						small={true}
						quantity={quantity}
						setQuantity={setQuantity}
						min={1}
						max={data.stock}
					/>
				) : (
					<span className={styles.quantity}>{data.quantity}</span>
				)}
			</span>
		</div>
	);
};

export default CartItem;
