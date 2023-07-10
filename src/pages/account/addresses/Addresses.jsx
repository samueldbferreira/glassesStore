import React from "react";
import { UserContext } from "../../../context/UserContext";
import { GET_ADDRESSES, POST_ADDRESS } from "../../../services/Api";
import AddressCard from "../../../components/addressCard/AddressCard";
import ChangeAddressModal from "./ChangeAddressModal/ChangeAddressModal";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import formStyles from "../../../styles/Forms.module.css";
import addressSVG from "../../../assets/account/address.svg";
import styles from "../Account.module.css";

const Addresses = () => {
	const { userData } = React.useContext(UserContext);
	const [name, setName] = React.useState("");
	const [cep, setCep] = React.useState("");
	const [street, setStreet] = React.useState("");
	const [number, setNumber] = React.useState("");
	const [complement, setComplement] = React.useState("");
	const [district, setDistrict] = React.useState("");
	const [state, setState] = React.useState("");
	const [city, setCity] = React.useState("");
	const [reference, setReference] = React.useState("");
	const [addresses, setAddresses] = React.useState([]);
	const [modalAddress, setModalAddress] = React.useState(null);

	React.useEffect(() => {
		const { url, options } = GET_ADDRESSES();

		async function fetchAddresses() {
			const response = await fetch(url, options);
			const data = await response.json();
			setAddresses(data);
		}

		fetchAddresses();
	}, [userData]);

	function handleSubmit(e) {
		e.preventDefault();

		if (!name || !cep || !street || !number || !district || !state || !city) {
			return window.alert("Preencha os dados necessários.");
		}

		const { url, options } = POST_ADDRESS({
			name,
			cep,
			street,
			number,
			complement,
			district,
			state,
			city,
			reference,
		});

		async function fetchAddress() {
			const response = await fetch(url, options);
			const json = await response.json();

			window.alert(json.msg);

			if (response.ok) {
				setAddresses([...addresses, json.data]);
			}
		}
		fetchAddress();
	}

	return (
		<>
			<div className={`${styles.grid} ${styles.addresses}`}>
				<div className={styles.containerData}>
					<h1 className={`${styles.titulo}`}>Endereços</h1>

					<ul className={styles.addressesList}>
						{addresses.map((address) => {
							return (
								<li key={address._id}>
									<AddressCard
										data={address}
										setModalAddress={setModalAddress}
										controls={true}
										setAddresses={setAddresses}
									/>
								</li>
							);
						})}
					</ul>
				</div>

				<div className={styles.containerData}>
					<h1 className={`${styles.titulo}`}>Adicionar endereço</h1>

					<form onSubmit={handleSubmit}>
						<p className={formStyles.instruction}>Preencha os dados abaixo</p>

						<div className={`${formStyles.inputs} ${styles.inputs}`}>
							<Input
								label="Nome do endereço"
								type="text"
								id="nome"
								value={name}
								setValue={setName}
							/>

							<Input
								label="CEP"
								type="text"
								id="cep"
								value={cep}
								setValue={setCep}
							/>

							<Input
								label="Rua"
								type="text"
								id="rua"
								value={street}
								setValue={setStreet}
							/>

							<span className={formStyles.flexInputs}>
								<Input
									label="Número"
									type="text"
									id="numero"
									value={number}
									setValue={setNumber}
								/>

								<Input
									label="Complemento"
									type="text"
									id="complemento"
									value={complement}
									setValue={setComplement}
								/>
							</span>

							<Input
								label="Bairro"
								type="text"
								id="bairro"
								value={district}
								setValue={setDistrict}
							/>

							<span className={formStyles.flexInputs}>
								<Input
									label="Estado"
									type="text"
									id="estado"
									value={state}
									setValue={setState}
								/>

								<Input
									label="Cidade"
									type="text"
									id="cidade"
									value={city}
									setValue={setCity}
								/>
							</span>

							<Input
								label="Ponto de referência"
								type="text"
								id="referencia"
								value={reference}
								setValue={setReference}
							/>
						</div>

						<Button value="SALVAR ENDEREÇO" icon={addressSVG} />
					</form>
				</div>
			</div>

			{modalAddress && (
				<ChangeAddressModal
					addressData={modalAddress}
					setAddresses={setAddresses}
					setModal={setModalAddress}
				/>
			)}
		</>
	);
};

export default Addresses;
