import { Route, Routes } from 'react-router-dom';
import Bag from './bag/Bag';
import Payment from './payment/Payment';


const Checkout = () => {
  return (
    <Routes>
      <Route path='/bag' element={<Bag />} />
      <Route path='/payment' element={<Payment />} />
    </Routes>
  )
}

export default Checkout;
