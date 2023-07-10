import React from "react";
import { UserContext } from "../../../context/UserContext";
import { PATCH_ME } from "../../../services/Api";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import saveSVG from "../../../assets/account/save.svg";
import mailSVG from "../../../assets/account/mail.svg";
import lockSVG from "../../../assets/account/lock.svg";
import formStyles from "../../../styles/Forms.module.css";
import ChangeEmailModal from "./changeEmailModal/ChangeEmailModal";
import ChangePasswordModal from "./changePasswordModal/ChangePasswordModal";
import styles from "../Account.module.css";

const Info = () => {
	const { userData, setUserData } = React.useContext(UserContext);
	const [firstName, setFirstName] = React.useState(userData.firstName);
	const [lastName, setLastName] = React.useState(userData.lastName);
	const [phone, setPhone] = React.useState(userData.phone);
	const [modalEmail, setModalEmail] = React.useState(false);
	const [modalPassword, setModalPassword] = React.useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		if (!firstName || !lastName) {
			return window.alert("Preencha os dados obrigatórios.");
		}

		const { url, options } = PATCH_ME({ firstName, lastName, phone });

		const response = await fetch(url, options);
		const json = await response.json();

		if (json.data) {
			setUserData(Object.assign(userData, json.data));
		}

		return window.alert(json.msg);
	}

	return (
		<>
			<div className={styles.grid}>
				<form className={styles.containerData} onSubmit={handleSubmit}>
					<h1 className={styles.titulo}>Dados pessoais</h1>

					<div className={`${formStyles.inputs} ${styles.inputs}`}>
						<Input
							label="Primeiro nome"
							type="text"
							id="firstName"
							value={firstName}
							setValue={setFirstName}
						/>

						<Input
							label="Sobrenome"
							type="text"
							id="lastName"
							value={lastName}
							setValue={setLastName}
						/>

						<Input
							label="Telefone"
							type="tel"
							id="phone"
							value={phone}
							setValue={setPhone}
						/>
					</div>

					<Button value="SALVAR ALTERAÇÕES" icon={saveSVG} />
				</form>

				<div className={styles.containerData}>
					<h1 className={`${styles.titulo}`}>Dados de acesso</h1>

					<div className={`${formStyles.inputs} ${styles.inputs}`}>
						<Input
							label="Email atual"
							type="email"
							id="email"
							value={userData.email}
							setValue={() => null}
							disabled={true}
						/>
					</div>

					<div className={formStyles.inputs}>
						<Button
							value="ALTERAR EMAIL"
							icon={mailSVG}
							style="transparent"
							onClick={() => setModalEmail(true)}
						/>

						<Button
							value="ALTERAR SENHA"
							icon={lockSVG}
							style="transparent"
							onClick={() => setModalPassword(true)}
						/>
					</div>
				</div>

				{modalEmail && <ChangeEmailModal setModal={setModalEmail} />}

				{modalPassword && <ChangePasswordModal setModal={setModalPassword} />}
			</div>
		</>
	);
};

export default Info;
