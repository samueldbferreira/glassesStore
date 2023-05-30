import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Input from "../../forms/input/Input";
import Button from "../../forms/button/Button";
import entrarSVG from '../../../assets/header/login-w.svg';
import formStyles from '../../forms/Forms.module.css';

const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit (e) {
        e.preventDefault();

        if (email === 'admin@admin.com' && password === 'admin') {
            navigate('/admin');

        } else {
            navigate('/account');

        }
    }

    return (
        <form className={formStyles.form} onSubmit={handleSubmit}>
            <div className={formStyles.formTitle}>
                <h1 className={formStyles.title}>Login</h1>
            </div>
            
            <div className={formStyles.formContent}>
                <p className={formStyles.instruction}>Digite seu email e senha</p>

                <div className={`${formStyles.inputs} mb-20`}>                
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

                <Link className={`${formStyles.link} mb-24`} to="/login/recuperar">Esqueceu sua senha</Link>

                <Button classname={`mb-28`} value="ENTRAR" icon={entrarSVG} />

                <p className={formStyles.redirect}>Ainda não tem uma conta? <Link to="/login/cadastro" className={formStyles.highlight}>Crie uma.</Link></p>
            </div>
        </form>
    );
}

export default LoginForm;
