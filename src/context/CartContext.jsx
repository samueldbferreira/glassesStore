import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = React.useState({});

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
	}, []);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				setCartItems,
				storeCart,
				subtotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
