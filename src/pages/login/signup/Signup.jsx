import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import Checkbox from "../../../components/checkbox/Checkbox";
import formStyles from "../../../styles/Forms.module.css";
import styles from "./Signup.module.css";

const Signup = () => {
	const { userPost } = React.useContext(UserContext);
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [terms, setTerms] = React.useState(false);

	async function postUser(e) {
		e.preventDefault();

		if (!firstName || !lastName || !email || !password || !terms) {
			return window.alert("Preencha os dados necessários.");
		}

		await userPost({ firstName, lastName, email, password });
	}

	return (
		<form className={formStyles.formContainer} onSubmit={postUser}>
			<div className={formStyles.formTitle}>
				<h1 className={formStyles.title}>Cadastro</h1>
			</div>

			<div className={formStyles.formContent}>
				<p className={formStyles.instruction}>
					Preencha as informações abaixo:
				</p>

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
						label="Email"
						type="email"
						id="email"
						value={email}
						setValue={setEmail}
					/>

					<Input
						label="Senha"
						type="password"
						id="password"
						value={password}
						setValue={setPassword}
					/>

					<Checkbox
						label="Li e estou de acordo com os termos e condições do site."
						id="termos"
						value={terms}
						setValue={setTerms}
					/>
				</div>

				<Button value="CRIAR CONTA" />

				<p
					className={`${formStyles.redirectUnderline} ${styles.redirectUnderline}`}
				>
					<Link to="/login">voltar para o login</Link>
				</p>
			</div>
		</form>
	);
};

export default Signup;
