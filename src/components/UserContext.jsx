import React from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();

  const [login, setLogin] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [cartItems, setCartItems] = React.useState({});

  function loadCart () {
    const savedCart = window.localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }

  function storeCart (cart) {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }

  function subtotal () {
    const total = Object.values(cartItems).reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);

    return total.toFixed(2);
  }

  async function userLogin (email, password) {
    const response = await fetch(`http://localhost:3000/accounts?email=${email}&password=${password}`);
    const data = await response.json();

    if (data) {
      setUserData(data[0]);
      setLogin(true);

      if (data[0].admin) {
        setCartItems([]);
        navigate('/admin/');

      } else {
        navigate('/');

      }

    } else {
      setUserData(null);
      setLogin(false);
      
    }
  }

  React.useEffect(() => {
    loadCart();
  }, []);

  return (
    <UserContext.Provider
      value={{
        login,
        userData,
        userLogin,
        cartItems,
        setCartItems,
        storeCart,
        subtotal
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
