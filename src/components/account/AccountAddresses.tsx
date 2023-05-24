import React from "react";

import Addresses from './Addresses';

import { IAddress } from '../address/Address.interfaces';

import styles from './Account.module.css';
import AddressEdit from "../address/AddressEdit";


const addresses: IAddress[] = [
    {
        id: 1,
        nome: 'Endereço principal',
        cep: '00000-000',
        rua: 'Rua vinte e dois',
        numero: '495',
        complemento: 'teste',
        bairro: 'Belém Capela',
        estado: 'SP',
        cidade: 'São Paulo',
        referencia: 'perto do teste'
    },
    {
        id: 2,
        nome: 'Trabalho',
        cep: '00123-000',
        rua: 'Rua trinta e cinco',
        numero: '145',
        complemento: 'teste 2',
        bairro: 'Belém',
        estado: 'RJ',
        cidade: 'Rio de Janeiro',
        referencia: 'perto do teste 2'
    }
] 


const AccountAddresses = () => {
    const [id, setId] = React.useState(0);
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
                <h1 className={`${styles.titulo} mb-28`}>Endereços</h1>

                <Addresses addresses={addresses} />
            </div>

            <div className={styles.containerData}>
                <h1 className={`${styles.titulo} mb-28`}>Adicionar endereço</h1>

                <AddressEdit
                    values={{
                        id,
                        nome,
                        cep,
                        rua,
                        numero,
                        complemento,
                        bairro,
                        estado,
                        cidade,
                        referencia
                    }}

                    setValues={{
                        setId,
                        setNome,
                        setCep,
                        setRua,
                        setNumero,
                        setComplemento,
                        setBairro,
                        setEstado,
                        setCidade,
                        setReferencia
                    }}
                />
            </div>
        </div>
    );
}

export default AccountAddresses;
