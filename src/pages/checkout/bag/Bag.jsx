import React from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";
import Button from "../../../components/button/Button";
import CartItem from "../../../components/cartItem/CartItem";
import rightSVG from "../../../assets/cart/arrow_forward_ios.svg";
import styles from "./Bag.module.css";

const Bag = () => {
	const { cartItems, setCartItems, subtotal, setOnPayment } =
		React.useContext(CartContext);
	const { login, addresses } = React.useContext(UserContext);

	const navigate = useNavigate();

	return (
		<section className={`${styles.gridBag} ${styles.container}`}>
			<div>
				<h2 className={styles.titleBag}>SACOLA DE COMPRAS</h2>

				<ul className={`${styles.items} ${styles.content}`}>
					{Object.values(cartItems).map((item) => {
						return (
							<li key={item.id} className={styles.item}>
								<CartItem
									changeQuantity={true}
									remove={true}
									data={item}
									cart={cartItems}
									setCart={setCartItems}
								/>
							</li>
						);
					})}
				</ul>
			</div>

			<div>
				<h2 className={`${styles.titleResumo}`}>RESUMO DA COMPRA</h2>

				<div className={`${styles.content} ${styles.total}`}>
					<p>SUBTOTAL:</p>
					<p>
						<strong>R$ {subtotal()}</strong>
					</p>
				</div>

				<Button
					value={"IR PARA O PAGAMENTO"}
					icon={rightSVG}
					onClick={() => {
						if (Object.values(cartItems).length > 0) {
							setOnPayment(true);

							if (login && addresses) {
								navigate("/checkout/pagamento");
							} else if (login) {
								navigate("/novo-endereco");
							} else {
								navigate("/login");
							}
						}
					}}
				/>
			</div>
		</section>
	);
};

export default Bag;
