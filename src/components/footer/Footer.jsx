import React from "react";
import { UserContext } from "../../context/UserContext";
import FooterAdmin from "./admin/FooterAdmin";
import FooterCustomer from "./customer/FooterCustomer";

const Footer = () => {
  const { login, userData } = React.useContext(UserContext);

  return login && userData.admin === true ? (
    <FooterAdmin />
  ) : (
    <FooterCustomer />
  );
};

export default Footer;
