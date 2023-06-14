import { useContext } from 'react';
import { UserContext } from '../UserContext';
import HeaderAdmin from './admin/HeaderAdmin';
import HeaderCustomer from './customer/HeaderCustomer';

const Header = ({ setCartModal }) => {
  const { login, userData } = useContext(UserContext);

  return (login && userData.admin) ? <HeaderAdmin /> : <HeaderCustomer setCartModal={setCartModal} />;
}

export default Header;
