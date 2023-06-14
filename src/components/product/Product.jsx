import React from 'react';
import { UserContext } from '../UserContext';
import AdminProduct from './admin/AdminProduct';
import CustomerProduct from './customer/CustomerProduct';

const Product = () => {
  const { userData, login } = React.useContext(UserContext);
  
  if (login && userData.admin) {
    return <AdminProduct />;
  
  } else {
    return <CustomerProduct />;

  }
};

export default Product;
