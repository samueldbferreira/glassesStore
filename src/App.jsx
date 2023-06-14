import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './components/UserContext';
import ProtectedRoute from './components/helper/ProtectedRoute';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Products from './components/products/products/Products';
import Product from './components/product/Product';
import Login from './components/login/Login';
import CustomerAccount from './components/account/customer/CustomerAccount';
import AdminAccount from './components/account/admin/AdminAccount';
import Terms from './components/terms/Terms';
import Footer from './components/footer/Footer';
import Faq from './components/faq/Faq';
import Checkout from './components/checkout/Checkout';
import './App.css';

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />

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
                element={
                  <ProtectedRoute>
                    <CustomerAccount />
                  </ProtectedRoute>
                }
              /> 

              <Route
                path='/admin/*'
                element={
                  <ProtectedRoute admin={true}>
                    <AdminAccount />
                  </ProtectedRoute>
                }
              />  

              <Route
                path='/termos'
                element={<Terms />}
              />

              <Route
                path='/perguntas'
                element={<Faq />}
              />

              <Route
                path='/checkout/*'
                element={<Checkout />}
              />
            </Routes>
          </main>

          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App;
