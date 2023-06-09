import React from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import CartItem from "../../../cartItem/CartItem";
import Button from "../../../button/Button";
import rightSVG from "../../../../assets/cart/arrow_forward_ios.svg";
import styles from "./CartModal.module.css";

const CartModal = ({ setCartModal }) => {
	const { cartItems, setCartItems, storeCart, subtotal } =
		React.useContext(CartContext);
	const navigate = useNavigate();

	React.useEffect(() => {
		storeCart(cartItems);
	});

	function closeModal() {
		setCartModal(false);
	}

	function outsideClick(e) {
		if (e.currentTarget === e.target) {
			closeModal();
		}
	}

	return (
		<div className={styles.modal} onClick={outsideClick}>
			<div className={styles.content}>
				<div className={styles.header}>
					<h1 className={styles.title}>SACOLA</h1>
					<a onClick={closeModal}>
						<i className={styles.closeIcon} />
					</a>
				</div>

				<ul className={styles.items}>
					{Object.values(cartItems).map((item) => {
						return (
							<li key={item.id}>
								<CartItem
									changeQuantity={false}
									remove={true}
									data={item}
									cart={cartItems}
									setCart={setCartItems}
								/>
							</li>
						);
					})}
				</ul>

				<div className={styles.buy}>
					<div className={styles.subtotal}>
						<p>SUBTOTAL:</p>
						<p>
							<strong>R$ {subtotal()}</strong>
						</p>
					</div>

					<Button
						value={"FINALIZAR COMPRA"}
						icon={rightSVG}
						onClick={() => {
							if (Object.values(cartItems).length > 0) {
								navigate("/checkout/sacola");
								setCartModal(false);
							} else {
								return window.alert(
									"A sacola está vazia! Adicione algum item para continuar."
								);
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default CartModal;
