import React from 'react';
import './App.css'
import Header from './components/Header';
import Recommendations from './components/Recommendations';
import Orderhistory from './components/Orderhistory';
import Search from './components/Search';
import Login from './components/Login';
import Delivery from './components/Delivery';
import styles from './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Sushi from './components/Sushi';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Header2 from './components/Header2';
import All from './components/All';
import Pizza from './components/Pizza';
import Hamburger from './components/Hamburger';
import Drinks from './components/Drinks';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header> </Header>
        <div>
          <Routes>
            <Route path="" element={<Recommendations />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Login/Register" element={<Register />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="" element={<Recommendations />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Login/Register" element={<Register />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Checkout/Orderhistory" element={<Orderhistory />} />
            <Route path="/Header2" element={<Header2 />} />
            <Route path="/Sushi" element={<Sushi />} />
            <Route path="/Header2/All" element={<All />} />
            <Route path="Pizza" element={<Pizza />} />
            <Route path="Hamburger" element={<Hamburger />} />
            <Route path="Drinks" element={<Drinks />} />
            <Route path="Checkout/Delivery" element={<Delivery />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;