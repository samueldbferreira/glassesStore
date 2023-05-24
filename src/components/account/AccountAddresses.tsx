import React from "react";

import Button from "../forms/button/Button";
import Input from "../forms/input/Input";

import addressSVG from '../../assets/account/address.svg';

import formStyles from '../forms/Forms.module.css';
import styles from './Account.module.css';


const AccountAddresses = () => {
    const [nome, setNome] = React.useState('');
    const [cep, setCep] = React.useState('');
    const [rua, setRua] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [complemento, setComplemento] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [estado, setEstado] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [referencia, setReferencia] = React.useState('');

    return (
        <div className={styles.grid}>
            <div className={styles.containerData}>
                <h1 className={styles.titulo}>Endereços</h1>
            </div>

            <div className={styles.containerData}>
                <h1 className={`${styles.titulo} mb-28`}>Adicionar endereço</h1>

                <p className={formStyles.instruction}>Preencha os dados abaixo</p>

                <div className={`${formStyles.inputs} mb-72`}>
                    <Input
                        label="Nome do endereço"
                        type="text"
                        id="nome"
                        value={nome}
                        setValue={setNome}
                    />

                    <Input
                        label="CEP"
                        type="text"
                        id="cep"
                        value={cep}
                        setValue={setCep}
                    />

                    <Input
                        label="Rua"
                        type="text"
                        id="rua"
                        value={rua}
                        setValue={setRua}
                    />

                    <span className={styles.flexInputs}>
                        <Input
                            label="Número"
                            type="text"
                            id="numero"
                            value={numero}
                            setValue={setNumero}
                        />

                        <Input
                            label="Complemento"
                            type="text"
                            id="complemento"
                            value={complemento}
                            setValue={setComplemento}
                        />
                    </span>

                    <Input
                        label="Bairro"
                        type="text"
                        id="bairro"
                        value={bairro}
                        setValue={setBairro}
                    />

                    <span className={styles.flexInputs}>
                        <Input
                            label="Estado"
                            type="text"
                            id="estado"
                            value={estado}
                            setValue={setEstado}
                        />

                        <Input
                            label="Cidade"
                            type="text"
                            id="cidade"
                            value={cidade}
                            setValue={setCidade}
                        />
                    </span>


                    <Input
                        label="Ponto de referência"
                        type="text"
                        id="referencia"
                        value={referencia}
                        setValue={setReferencia}
                    />
                </div>

                <Button value="SALVAR ENDEREÇO" icon={addressSVG} />
            </div>
        </div>
    );
}

export default AccountAddresses;
