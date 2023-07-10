import React from "react";
import { UserContext } from "../../../../context/UserContext";
import { PATCH_ME } from "../../../../services/Api";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import checkSVG from "../../../../assets/account/check.svg";
import formStyles from "../../../../styles/Forms.module.css";
import styles from "./ChangePasswordModal.module.css";

const ChangePasswordModal = ({ setModal }) => {
	const { userData, setUserData } = React.useContext(UserContext);

	const [newPassword, setNewPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");

	function closeModal(e) {
		if (e.currentTarget === e.target) {
			setModal(null);
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (!newPassword || !confirmPassword) {
			return window.alert("Preencha todos os campos.");
		}

		if (newPassword != confirmPassword) {
			return window.alert("As senhas não conferem.");
		}

		const { url, options } = PATCH_ME({ password: newPassword });

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
						<h1 className={formStyles.title}>Alterar Senha</h1>
					</div>

					<div className={`${formStyles.formContent} ${styles.formContent}`}>
						<p className={formStyles.instruction}>
							Preencha as informações abaixo
						</p>

						<div className={`${formStyles.inputs} ${styles.inputs}`}>
							<Input
								label="Nova senha"
								type="password"
								id="newPassword"
								value={newPassword}
								setValue={setNewPassword}
							/>

							<Input
								label="Confirmar nova senha"
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								setValue={setConfirmPassword}
							/>
						</div>

						<Button value="ALTERAR SENHA" icon={checkSVG} />

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

export default ChangePasswordModal;
