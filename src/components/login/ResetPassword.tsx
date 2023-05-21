import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../forms/input/Input';
import Button from '../forms/button/Button';

import formStyles from '../forms/Forms.module.css';


const ResetPassword = () => {
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');

    return (
        <form className={formStyles.form}>
            <div className={formStyles.formTitle}>
                <h1 className={formStyles.title}>Redefinir senha</h1>
            </div>
            
            <div className={formStyles.formContent}>
                <p className={formStyles.instruction}>Digite sua nova senha</p>

                <div className={`${formStyles.inputs} mb-44`}>                
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

                <Button classname='mb-44' value="REDEFINIR" />

                <p className={`${formStyles.redirectUnderline}`}><Link to="/login">voltar para o login</Link></p>
            </div>
        </form>
    );
}

export default ResetPassword;
