import FooterAdmin from "./admin/FooterAdmin";
import FooterCustomer from "./customer/FooterCustomer";

const Footer = ({ admin }) => {
  return admin ? <FooterAdmin /> : <FooterCustomer />;
}

export default Footer;
