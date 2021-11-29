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

import ShoppingCart from './components/ShoppingCart';
    
// Search bar...


function App() {
  return (
    <>
    <BrowserRouter>
      <Header> </Header>   

        <div>
        
          <Routes>
            <Route path="" element={ <Recommendations /> }/>
            <Route path="/Login" element={ <Login /> } />
            <Route path="/Login/Register" element= { <Register/>} />
            <Route path="/Header" element={ <Header/> } />  
            <Route path="/ShoppingCart" element={ <ShoppingCart/> } />   
          </Routes>           
        </div>

    </BrowserRouter>
    </>

  );
}

export default App;