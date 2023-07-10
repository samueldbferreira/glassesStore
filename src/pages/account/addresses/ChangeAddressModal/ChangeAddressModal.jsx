import React from "react";
import { PATCH_ADDRESS } from "../../../../services/Api";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import addressSVG from "../../../../assets/account/address.svg";
import formStyles from "../../../../styles/Forms.module.css";
import styles from "./ChangeAddressModal.module.css";

const ChangeAddressModal = ({ addressData, setAddresses, setModal }) => {
	const [name, setName] = React.useState(addressData.name);
	const [cep, setCep] = React.useState(addressData.cep);
	const [street, setStreet] = React.useState(addressData.street);
	const [number, setNumber] = React.useState(addressData.number);
	const [complement, setComplement] = React.useState(addressData.complement);
	const [district, setDistrict] = React.useState(addressData.district);
	const [state, setState] = React.useState(addressData.state);
	const [city, setCity] = React.useState(addressData.city);
	const [reference, setReference] = React.useState(addressData.reference);

	async function handleSubmit(e) {
		e.preventDefault();

		if (!district || !cep || !city || !state || !name || !number || !street) {
			return window.alert("Preencha todos os campos.");
		}

		const { url, options } = PATCH_ADDRESS(addressData._id, {
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

		const response = await fetch(url, options);
		const json = await response.json();

		window.alert(json.msg);

		if (json.data) {
			setAddresses((addresses) => [
				...addresses.filter((a) => a._id != json.data._id),
				json.data,
			]);
		}

		setModal(false);
	}

	function closeModal(e) {
		if (e.currentTarget === e.target) {
			setModal(null);
		}
	}

	return (
		<div className={styles.modal} onClick={closeModal}>
			<div className={styles.modalContent}>
				<div className={formStyles.formTitle}>
					<h1 className={formStyles.title}>Alterar Endereço</h1>
				</div>

				<div className={`${formStyles.formContent} ${styles.formContent}`}>
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

					<a className={`${formStyles.redirectUnderline}`} onClick={closeModal}>
						cancelar
					</a>
				</div>
			</div>
		</div>
	);
};

export default ChangeAddressModal;
