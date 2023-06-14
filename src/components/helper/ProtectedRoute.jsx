import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const ProtectedRoute = ({ children, admin }) => {
  const { login, userData } = React.useContext(UserContext);

  if (!login || (admin && userData.admin === false)) {
    return <Navigate to="/login" />;
  
  } else {
      return children;

  } 
}

export default ProtectedRoute
