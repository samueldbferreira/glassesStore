import React from "react";
import { UserContext } from '../../../UserContext';
import AddressCard from "../../../addresses/addressCard/AddressCard";
import AddressEdit from "../../../addresses/addressEdit/AddressEdit";
import ModalAddress from './ModalAddress.jsx';
import styles from '../CustomerAccount.module.css';

const CustomerAddresses = () => {
  const { userData } = React.useContext(UserContext);

  const [addresses, setAddresses] = React.useState([]);

  const [modalAddress, setModalAddress] = React.useState(null);

  React.useEffect(() => {
    const { id } = userData;
    
    async function fetchAddresses () {
      const response = await fetch(`http://localhost:3000/addresses?idCustomer=${id}`);
      const data = await response.json();
      setAddresses(data);
    }
    fetchAddresses();

  }, [userData]);

  return (
    <>
      <div className={`${styles.grid} ${styles.addresses}`}>
        <div className={styles.containerData}>
            <h1 className={`${styles.titulo} mb-28`}>Endereços</h1>

            <ul className={styles.addressesList}>
              {
                addresses.map((address) => {
                  return (
                    <li key={address.id}>
                      <AddressCard 
                        data={address}
                        setModalAddress={setModalAddress}
                        controls={true}
                      />
                    </li>
                  );
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
          setAddresses={setAddresses}
          setModal={setModalAddress}
        />}
    </>
  );
}

export default CustomerAddresses;
