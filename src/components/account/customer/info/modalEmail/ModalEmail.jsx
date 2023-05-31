import React from 'react';
import Input from '../../../../forms/input/Input';
import Button from '../../../../forms/button/Button';
import checkSVG from '../../../../../assets/account/check.svg';
import formStyles from '../../../../forms/Forms.module.css';
import styles from './ModalEmail.module.css';

const ModalEmail = ({ email, setModal }) => {
    const [newEmail, setNewEmail] = React.useState('');
    const [confirmEmail, setConfirmEmail] = React.useState('');

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
                        <h1 className={formStyles.title}>Alterar Email</h1>
                    </div>
                    
                    <div className={`${formStyles.formContent} ${styles.formContent}`}>
                        <p className={formStyles.instruction}>Preencha as informações abaixo</p>

                        <div className={`${formStyles.inputs} mb-32`}>                
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

                        <Button
                            classname={`mb-28`}
                            value="ALTERAR EMAIL"
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

export default ModalEmail;
