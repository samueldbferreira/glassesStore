import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Products from './components/products/products/Products';
import Product from './components/products/product/Product';
import Login from './components/login/Login';
import CustomerAccount from './components/account/customer/CustomerAccount';
import AdminAccount from './components/account/admin/AdminAccount';
import Terms from './components/terms/Terms';
import Footer from './components/footer/Footer';
import Faq from './components/faq/Faq';
import './App.css';
import ModalCart from './components/cart/modalCart/ModalCart';

function App () {
  const [cartModal, setCartModal] = React.useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header
          admin={false}
          setCartModal={setCartModal}
        />

        <main className='container'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />

            <Route
              path='/produtos/:category'
              element={<Products />}
            />

            <Route
              path='/produto/:id'
              element={<Product />}
            />

            <Route
              path='/login/*'
              element={<Login />}
            />

            <Route
              path='/account/*'
              element={<CustomerAccount />}
            /> 

            <Route
              path='/admin/*'
              element={<AdminAccount />}
            />  

            <Route
              path='/termos'
              element={<Terms />}
            />

            <Route
              path='/perguntas'
              element={<Faq />}
            />
          </Routes>

          { 
            cartModal
            &&
            <ModalCart
              setCartModal={setCartModal}
            />
          }
        </main>

        <Footer
          admin={false}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
