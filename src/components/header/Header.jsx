import React from "react";
import { UserContext } from "../../context/UserContext";
import HeaderAdmin from "./admin/HeaderAdmin";
import HeaderCustomer from "./customer/HeaderCustomer";

const Header = () => {
  const { login, userData } = React.useContext(UserContext);

  return login && userData.admin ? <HeaderAdmin /> : <HeaderCustomer />;
};

export default Header;
