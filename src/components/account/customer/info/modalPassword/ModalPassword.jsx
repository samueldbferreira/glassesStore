import React from 'react';
import { UserContext } from '../../../../UserContext';
import Input from '../../../../forms/input/Input';
import Button from '../../../../forms/button/Button';
import checkSVG from '../../../../../assets/account/check.svg';
import formStyles from '../../../../forms/Forms.module.css';
import styles from './ModalPassword.module.css';

const ModalPassword = ({ setModal }) => {
    const { userData } = React.useContext(UserContext);

    const [currentPassword, setCurrentPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    function closeModal (e) {
        if (e.currentTarget === e.target) {
            setModal(null);
        }
    }

    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent}>
                <form className={formStyles.form}>
                    <div className={formStyles.formTitle}>
                        <h1 className={formStyles.title}>Alterar Senha</h1>
                    </div>
                    
                    <div className={`${formStyles.formContent} ${styles.formContent}`}>
                        <p className={formStyles.instruction}>Preencha as informações abaixo</p>

                        <div className={`${formStyles.inputs} mb-32`}>                
                            <Input
                                label="Senha atual"
                                type="password"
                                id="password"
                                value={currentPassword}
                                setValue={setCurrentPassword}
                            />

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

                        <Button
                            classname={`mb-28`}
                            value="ALTERAR SENHA"
                            icon={checkSVG}
                        />

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
}

export default ModalPassword;
