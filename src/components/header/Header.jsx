import HeaderAdmin from './admin/HeaderAdmin';
import HeaderCustomer from './customer/HeaderCustomer';


const Header = ({ admin, setCartModal }) => {
  return admin ? <HeaderAdmin /> : <HeaderCustomer setCartModal={setCartModal} />;
}

export default Header;
