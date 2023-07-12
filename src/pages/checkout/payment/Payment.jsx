import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import AddressCard from "../../../components/addressCard/AddressCard";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import formStyles from "../../../styles/Forms.module.css";
import styles from "./Payment.module.css";
import CartItem from "../../../components/cartItem/CartItem";
import { GET_ADDRESSES, POST_ORDER } from "../../../services/Api";

const Payment = () => {
	const navigate = useNavigate();
	const [address, setAddress] = React.useState(null);
	const { cartItems, setCartItems, subtotal } = React.useContext(CartContext);
	const [numero, setNumero] = React.useState("");
	const [nome, setNome] = React.useState("");
	const [vencimento, setVencimento] = React.useState("");
	const [codigo, setCodigo] = React.useState("");
	const [parcelamento, setParcelamento] = React.useState(1);

	React.useEffect(() => {
		const { url, options } = GET_ADDRESSES();

		async function fetchAddresses() {
			const res = await fetch(url, options);
			const json = await res.json();
			setAddress(json[0]);
		}
		fetchAddresses();
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		if (!numero) {
			return window.alert("Preencha os dados de pagamento.");
		}

		const { url, options } = POST_ORDER(subtotal(), Object.values(cartItems));

		const res = await fetch(url, options);
		const json = await res.json();

		window.alert(json.msg);

		if (res.ok) {
			setCartItems({});
			return navigate("/conta/pedidos");
		}
	}

	return (
		address &&
		cartItems && (
			<section className={`${styles.grid} ${styles.container}`}>
				<div>
					<div className={styles.address}>
						<span className={`${styles.titleChange}`}>
							<h2 className={styles.title}>ENDEREÇO</h2>
							<a className={styles.change}>alterar</a>
						</span>

						<AddressCard data={address} controls={false} />
					</div>

					<div>
						<span className={`${styles.titleChange}`}>
							<h2 className={styles.title}>SACOLA DE COMPRAS</h2>

							<NavLink className={styles.change} to="/checkout/sacola">
								alterar
							</NavLink>
						</span>

						<ul className={styles.content}>
							{Object.values(cartItems).map((item) => {
								return (
									<li key={item.id}>
										<CartItem
											changeQuantity={false}
											remove={false}
											data={item}
											cart={cartItems}
											setCart={setCartItems}
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<div className={`${styles.payment}`}>
					<h2 className={`${styles.title} ${styles.titlePayment}`}>
						FORMA DE PAGAMENTO
					</h2>

					<div className={`${formStyles.inputs} ${styles.inputsPayment}`}>
						<Input
							label="Número do cartão"
							id="numero"
							type="text"
							value={numero}
							setValue={setNumero}
						/>

						<Input
							label="Nome do titular"
							id="nome"
							type="text"
							value={nome}
							setValue={setNome}
						/>

						<span className={formStyles.flexInputs}>
							<Input
								label="Vencimento (MM/AA)"
								id="vencimento"
								type="text"
								value={vencimento}
								setValue={setVencimento}
							/>

							<Input
								label="Código de segurança"
								id="codigo"
								type="number"
								value={codigo}
								setValue={setCodigo}
							/>
						</span>

						<Input
							label="Parcelamento"
							id="parcelamento"
							type="number"
							value={parcelamento}
							setValue={setParcelamento}
						/>
					</div>

					<Button
						value={"FINALIZAR COMPRA"}
						style={"red"}
						onClick={handleSubmit}
					/>
				</div>
			</section>
		)
	);
};

export default Payment;
