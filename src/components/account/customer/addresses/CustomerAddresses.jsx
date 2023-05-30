import React from "react";
import AddressCard from "../../../addresses/addressCard/AddressCard";
import AddressEdit from "../../../addresses/addressEdit/AddressEdit";
import styles from '../CustomerAccount.module.css';


const addresses = [
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

const CustomerAddresses = () => {
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

          <ul className={styles.addressesList}>
            {
              addresses.map((address) => {
                return (
                  <li key={address}>
                    <AddressCard data={address} />
                  </li>
                )
              })
            }
          </ul>
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

export default CustomerAddresses;
