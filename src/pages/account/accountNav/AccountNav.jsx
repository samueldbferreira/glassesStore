import React from "react";
import { UserContext } from "../../../context/UserContext";
import AccountNavAdmin from "./admin/AccountNavAdmin";
import AccountNavCustomer from "./customer/AccountNavCustomer";

const AccountNav = () => {
	const { login, userData } = React.useContext(UserContext);

	return login && userData.admin ? <AccountNavAdmin /> : <AccountNavCustomer />;
};

export default AccountNav;
