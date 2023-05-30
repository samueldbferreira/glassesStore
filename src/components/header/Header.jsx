import HeaderAdmin from './admin/HeaderAdmin';
import HeaderCustomer from './customer/HeaderCustomer';


const Header = ({ admin }) => {
  return admin ? <HeaderAdmin /> : <HeaderCustomer />;
}

export default Header;
