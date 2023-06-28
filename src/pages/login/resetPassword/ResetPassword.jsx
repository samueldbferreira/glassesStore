import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import formStyles from "../../../styles/Forms.module.css";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");

  return (
    <form className={formStyles.formContainer}>
      <div className={formStyles.formTitle}>
        <h1 className={formStyles.title}>Redefinir senha</h1>
      </div>

      <div className={formStyles.formContent}>
        <p className={formStyles.instruction}>Digite sua nova senha</p>

        <div className={`${formStyles.inputs} ${styles.inputs}`}>
          <Input
            label="Senha"
            type="password"
            id="password"
            value={password}
            setValue={setPassword}
          />

          <Input
            label="Confirmar senha"
            type="password"
            id="confirm"
            value={confirm}
            setValue={setConfirm}
          />
        </div>

        <Button
          value="REDEFINIR"
          onClick={() => navigate("/login/redefinir")}
        />

        <p
          className={`${formStyles.redirectUnderline} ${styles.redirectUnderline}`}
        >
          <Link to="/login">voltar para o login</Link>
        </p>
      </div>
    </form>
  );
};

export default ResetPassword;
