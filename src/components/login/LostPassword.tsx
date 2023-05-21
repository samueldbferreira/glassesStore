import React from "react";

import { Link, useNavigate } from "react-router-dom";

import Input from "../forms/input/Input";
import Button from "../forms/button/Button";

import formStyles from '../forms/Forms.module.css';


const LostPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    
    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        navigate('/login/redefinir');
    }

    return (
        <form className={formStyles.form} onSubmit={handleSubmit}>
            <div className={formStyles.formTitle}>
                <h1 className={formStyles.title}>Recuperar senha</h1>
            </div>
            
            <div className={formStyles.formContent}>
                <p className={formStyles.instruction}>Digite seu email</p>

                <div className={`${formStyles.inputs} mb-24`}>                
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        value={email}
                        setValue={setEmail}
                    />
                </div>

                <Button classname="mb-32" value="RECUPERAR" />

                <p className={`${formStyles.redirectUnderline}`}><Link to="/login">voltar para o login</Link></p>
            </div>
        </form>
    );
}

export default LostPassword;
