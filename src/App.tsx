import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './Home.tsx';
import Terms from './components/terms/Terms.tsx';
import Login from './components/login/Login.tsx';
import Account from './components/account/Account.tsx';
import Admin from './components/admin/Admin.tsx';
import Products from './components/products/Products.tsx';
import ProductDetails from './components/products/ProductDetails.tsx';

import './App.css'


function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />

        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:category' element={<Products />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/termos' element={<Terms />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/account/*' element={<Account />} />
            <Route path='/admin/*' element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
