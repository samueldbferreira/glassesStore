import Address from '../address/Address';

import { IAddress } from '../address/Address.interfaces';

import styles from './Addresses.module.css';


const Addresses = ({ addresses }: { addresses: IAddress[] }) => {
    return (
        <ul className={styles.addressesList}>
            {
                addresses.map((address) => {
                    return (
                        <li>
                            <Address data={address} />
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Addresses;
