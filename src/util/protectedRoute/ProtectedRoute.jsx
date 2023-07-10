import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoute = ({ children, admin, alternativeRoute }) => {
	const { login, userData } = React.useContext(UserContext);

	if (admin && login && userData.admin) {
		return children;
	} else if (login) {
		return children;
	} else {
		return <Navigate to={alternativeRoute} />;
	}
};

export default ProtectedRoute;
