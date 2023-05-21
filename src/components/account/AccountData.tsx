import React from "react";

import Button from "../forms/button/Button";
import Input from "../forms/input/Input";

import saveSVG from '../../assets/account/save.svg';
import mailSVG from '../../assets/account/mail.svg';
import lockSVG from '../../assets/account/lock.svg';

import styles from './AccountData.module.css';


const AccountData = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <div className={styles.gridData}>
            <form className={styles.containerData}>
                <h1>Dados pessoais</h1>

                <div className={styles.inputs}>
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
                        label="Telefone"
                        type="tel"
                        id="phone"
                        value={phone}
                        setValue={setPhone}
                    />
                </div>

                <Button value="SALVAR ALTERAÇÕES" icon={saveSVG} />
            </form>
            
            <span className={styles.separator}></span>

            <div className={styles.containerData}>
                <h1>Dados de acesso</h1>

                <Input
                    label="Email atual"
                    type="email"
                    id="email"
                    value={email}
                    setValue={setEmail}
                />

                <div className={styles.buttons}>
                    <Button value="ALTERAR EMAIL" icon={mailSVG} style="transparent" />
                    <Button value="ALTERAR SENHA" icon={lockSVG} style="transparent" />
                </div>
            </div>
        </div>
    );
}

export default AccountData;
