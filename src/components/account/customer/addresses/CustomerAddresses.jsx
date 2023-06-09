import React from "react";
import AddressCard from "../../../addresses/addressCard/AddressCard";
import AddressEdit from "../../../addresses/addressEdit/AddressEdit";
import ModalAddress from './ModalAddress.jsx';
import styles from '../CustomerAccount.module.css';

// const addresses = [
//   {
//       id: 1,
//       nome: 'Endereço principal',
//       cep: '00000-000',
//       rua: 'Rua vinte e dois',
//       numero: '495',
//       complemento: 'teste',
//       bairro: 'Belém Capela',
//       estado: 'SP',
//       cidade: 'São Paulo',
//       referencia: 'perto do teste'
//   },
//   {
//       id: 2,
//       nome: 'Trabalho',
//       cep: '00123-000',
//       rua: 'Rua trinta e cinco',
//       numero: '145',
//       complemento: 'teste 2',
//       bairro: 'Belém',
//       estado: 'RJ',
//       cidade: 'Rio de Janeiro',
//       referencia: 'perto do teste 2'
//   }
// ]

async function getAddresses (setAddresses) {
    const response = await fetch('http://localhost:3000/addresses');
    const data = await response.json();

    setAddresses(data);
}

const CustomerAddresses = () => {
    const [modalAddress, setModalAddress] = React.useState(null);
    const [addresses, setAddresses] = React.useState([]);

    React.useEffect(() => {
        getAddresses(setAddresses);
    }, [], );

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.containerData}>
            <h1 className={`${styles.titulo} mb-28`}>Endereços</h1>

            <ul className={styles.addressesList}>
              {
                addresses.map((address) => {
                  return (
                    <li key={address.nome}>
                      <AddressCard 
                        data={address}
                        setModalAddress={setModalAddress}
                      />
                    </li>
                  )
                })
              }
            </ul>
        </div>

        <div className={styles.containerData}>
          <h1 className={`${styles.titulo} mb-28`}>Adicionar endereço</h1>

          <AddressEdit />
        </div>
      </div>

      {
        modalAddress
        &&
        <ModalAddress 
          addressData={modalAddress}
          setModal={setModalAddress}
        />}
    </>
  );
}

export default CustomerAddresses;
