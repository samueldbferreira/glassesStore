import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import entrarSVG from "../../../assets/header/login-w.svg";
import formStyles from "../../../styles/Forms.module.css";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const context = React.useContext(UserContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    context.userLogin(email, password);
  }

  return (
    <form className={formStyles.formContainer} onSubmit={handleSubmit}>
      <div className={formStyles.formTitle}>
        <h1 className={formStyles.title}>Login</h1>
      </div>

      <div className={formStyles.formContent}>
        <p className={formStyles.instruction}>Digite seu email e senha</p>

        <div className={`${formStyles.inputs} ${styles.inputs}`}>
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
        </div>

        <Link
          className={`${formStyles.link} ${styles.link}`}
          to="/login/recuperar"
        >
          Esqueceu sua senha
        </Link>

        <Button value="ENTRAR" icon={entrarSVG} />

        <p className={`${formStyles.redirect} ${styles.redirect}`}>
          Ainda não tem uma conta?{" "}
          <Link to="/login/cadastro" className={formStyles.highlight}>
            Crie uma.
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
