import React from "react";
import { UserContext } from "../../../../context/UserContext";
import { PATCH_ME } from "../../../../services/Api";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import checkSVG from "../../../../assets/account/check.svg";
import formStyles from "../../../../styles/Forms.module.css";
import styles from "./ChangeEmailModal.module.css";

const ChangeEmailModal = ({ setModal }) => {
	const { userData, setUserData } = React.useContext(UserContext);

	const [email, setEmail] = React.useState(userData.email);
	const [newEmail, setNewEmail] = React.useState("");
	const [confirmEmail, setConfirmEmail] = React.useState("");

	function closeModal(e) {
		if (e.currentTarget === e.target) {
			setModal(null);
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (!newEmail || !confirmEmail) {
			return window.alert("Preencha todos os campos.");
		}

		if (newEmail != confirmEmail) {
			return window.alert("Os emails não conferem.");
		}

		const { url, options } = PATCH_ME({ email: newEmail });

		const response = await fetch(url, options);
		const json = await response.json();

		window.alert(json.msg);

		if (json.data) {
			setUserData(Object.assign(userData, json.data));
		}

		setModal(false);
	}

	return (
		<div className={styles.modal} onClick={closeModal}>
			<div className={styles.modalContent}>
				<form className={formStyles.form} onSubmit={handleSubmit}>
					<div className={formStyles.formTitle}>
						<h1 className={formStyles.title}>Alterar Email</h1>
					</div>

					<div className={`${formStyles.formContent} ${styles.formContent}`}>
						<p className={formStyles.instruction}>
							Preencha as informações abaixo
						</p>

						<div className={`${formStyles.inputs} ${styles.inputs}`}>
							<Input
								label="Email atual"
								type="email"
								id="email"
								value={email}
								disabled={true}
								setValue={() => {}}
							/>

							<Input
								label="Novo email"
								type="email"
								id="newEmail"
								value={newEmail}
								setValue={setNewEmail}
							/>

							<Input
								label="Confirmar novo email"
								type="email"
								id="confirmEmail"
								value={confirmEmail}
								setValue={setConfirmEmail}
							/>
						</div>

						<Button value="ALTERAR EMAIL" icon={checkSVG} />

						<a
							className={`${formStyles.redirectUnderline}`}
							onClick={closeModal}
						>
							cancelar
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChangeEmailModal;
