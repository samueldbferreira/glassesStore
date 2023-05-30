import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Products from './components/products/products/Products';
import Product from './components/products/product/Product';
import Login from './components/login/Login';
import CustomerAccount from './components/account/customer/CustomerAccount';
import Footer from './components/footer/Footer';
import './App.css';
import Terms from './components/terms/Terms';

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header
          admin={false}
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
              path='/termos'
              element={<Terms />}
            />
          </Routes>
        </main>

        <Footer
          admin={false}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
