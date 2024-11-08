import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Coupon from './Coupon';
import Offer from './Offer';
import Order from './Order';
import Men from './Men';
import Women from './Women';
import Header from '../component/Header';
import Footer from '../component/Footer';
import NotFound from '../component/NotFound';
import PrivateRoute from './PrivateRoute';
import CustomerCare from './CustomerCare';
import Accessibility from './Accessibility';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import DeliveryAndReturns from './DeliveryAndReturns';
import About from './About';
import GiftVoucher from './GiftVouchers';
import BlackFridayDay from './BlackFriday';
import StoreApp from './App';
import Search from '../pages/Search';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
  


      <Route path='/cart' element={<Cart />} />

      {/* <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} /> */}
      <Route path='/order' element={<PrivateRoute><Order /></PrivateRoute>} />

    <Route path='/search' element={<Layout><Search /></Layout>} /> 
      <Route path='/' element={<Layout><Home /></Layout>} />
      <Route path='/singleProduct/:id' element={<Layout><SingleProduct /></Layout>} />
      <Route path='/men' element={<Layout><Men /></Layout>} />
      <Route path='/women' element={<Layout><Women /></Layout>} />
      <Route path='/customercare' element={<Layout><CustomerCare /></Layout>} />
      <Route path='/accessibility' element={<Layout><Accessibility /></Layout>} />
      <Route path='/termsandconditions' element={<Layout><TermsAndConditions /></Layout>} />
      <Route path='/privacy&Cookies' element={<Layout><PrivacyPolicy /></Layout>} />
      <Route path='/deliveryandreturns' element={<Layout><DeliveryAndReturns /></Layout>} />
      <Route path='/about' element={<Layout><About /></Layout>} />
      <Route path='/giftvouchers' element={<Layout><GiftVoucher /></Layout>} />
      <Route path='/blackfriday' element={<Layout><BlackFridayDay /></Layout>} />
      <Route path='/app' element={<Layout><StoreApp /></Layout>} />


      
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path='/offer' element={<Layout><PrivateRoute><Offer /></PrivateRoute></Layout>} />
      <Route path='/coupon' element={<Layout><PrivateRoute><Coupon /></PrivateRoute></Layout>} />
  


      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
