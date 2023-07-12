import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = React.useState({});
	const [onPayment, setOnPayment] = React.useState(false);

	function loadCart() {
		const savedCart = window.localStorage.getItem("cart");
		if (savedCart) {
			setCartItems(JSON.parse(savedCart));
		}
	}

	function storeCart(cart) {
		window.localStorage.setItem("cart", JSON.stringify(cart));
	}

	function subtotal() {
		const total = Object.values(cartItems).reduce((sum, item) => {
			return sum + item.price * item.quantity;
		}, 0);

		return total.toFixed(2);
	}

	React.useEffect(() => {
		loadCart();

		return () => {
			setOnPayment(false);
		};
	}, []);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				setCartItems,
				storeCart,
				subtotal,
				onPayment,
				setOnPayment,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
