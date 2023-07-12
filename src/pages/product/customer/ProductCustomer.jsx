import React from "react";
import { CartContext } from "../../../context/CartContext";
import Quantity from "../../../components/quantity/Quantity";
import RadioColor from "../../../components/radioColor/RadioColor";
import ImagesGrid from "../../../components/imagesGrid/ImagesGrid";
import Button from "../../../components/button/Button";
import bagSVG from "../../../assets/product/shopping_bag.svg";
import styles from "./ProductCustomer.module.css";

const ProductCustomer = ({ data }) => {
	const { cartItems, setCartItems, storeCart, setOnPayment } =
		React.useContext(CartContext);
	const [quantity, setQuantity] = React.useState(1);
	const [color, setColor] = React.useState("");

	function addToCart(e) {
		e.preventDefault();

		if (!quantity || !color) {
			return window.alert("Selecione uma cor e uma quantidade.");
		}

		setOnPayment(false);

		const idx = `${data._id},${color}`;

		const item = {
			id: idx,
			imgSrc: data.images[0],
			name: data.name,
			color: color,
			price: data.price,
			quantity:
				idx in cartItems ? (cartItems[idx].quantity += quantity) : quantity,
			stock: data.stock,
		};

		const newCart = { ...cartItems, [idx]: item };

		setCartItems(newCart);
		storeCart(newCart);
		setQuantity(1);

		return window.alert("Produto adicionado à sacola.");
	}

	return (
		data && (
			<>
				<div className={styles.gridProduct}>
					<ImagesGrid images={data.images} />

					<form className={styles.details} onSubmit={addToCart}>
						<div className={styles.header}>
							<h1 className={`${styles.titulo}`}>{data.name}</h1>
							<p className={`${styles.stock}`}>{data.stock} disponíveis</p>
						</div>

						<hr className={`${styles.separator}`} />

						<div className={`${styles.valores}`}>
							<p className={styles.total}>R$ {data.price}</p>
							{data.installments > 0 && (
								<span className={styles.parcelamento}>
									<i className={styles.cardIcon} />
									<p className={styles.parcelas}>
										{data.installments}X de R${" "}
										{(data.price / data.installments).toFixed(2)}
									</p>
								</span>
							)}
						</div>

						<div className={styles.form}>
							<div className={styles.colorsContainer}>
								<h2 className={`${styles.label}`}>Cor:</h2>

								<RadioColor
									colors={data.colors}
									value={color}
									setValue={setColor}
								/>
							</div>

							<div className={styles.quantityContainer}>
								<h2 className={`${styles.label}`}>Quantidade:</h2>

								<Quantity
									min={1}
									max={data.stock}
									quantity={quantity}
									setQuantity={setQuantity}
								/>
							</div>
						</div>

						<span className={styles.btn}>
							<Button value="ADICIONAR À SACOLA" icon={bagSVG} color="red" />
						</span>
					</form>
				</div>

				<section className={styles.info}>
					<h2 className={`${styles.subtitulo}`}>Sobre o produto</h2>
					<p className={`${styles.texto}`}>{data.description}</p>

					<h2 className={`${styles.subtitulo}`}>Especificações técnicas</h2>
					<ul className={styles.lista}>
						<li>
							comprimento: <strong>{data.width}mm</strong>
						</li>
						<li>
							altura: <strong>{data.height}mm</strong>
						</li>
						<li>
							haste: <strong>{data.stem}mm</strong>
						</li>
						<li>
							espaço nariz: <strong>{data.noseSpace}mm</strong>
						</li>
						<li>
							material: <strong>{data.material}</strong>
						</li>
					</ul>
				</section>
			</>
		)
	);
};

export default ProductCustomer;
