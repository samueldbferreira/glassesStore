import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import formStyles from "../../../styles/Forms.module.css";
import styles from "./LostPassword.module.css";

const LostPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/login/redefinir");
  }

  return (
    <form className={formStyles.formContainer} onSubmit={handleSubmit}>
      <div className={formStyles.formTitle}>
        <h1 className={formStyles.title}>Recuperar senha</h1>
      </div>

      <div className={formStyles.formContent}>
        <p className={formStyles.instruction}>Digite seu email</p>

        <div className={`${formStyles.inputs} ${styles.inputs}`}>
          <Input
            label="Email"
            type="email"
            id="email"
            value={email}
            setValue={setEmail}
          />
        </div>

        <Button value="RECUPERAR" />

        <p
          className={`${formStyles.redirectUnderline} ${styles.redirectUnderline}`}
        >
          <Link to="/login">voltar para o login</Link>
        </p>
      </div>
    </form>
  );
};

export default LostPassword;
