import React from 'react';
import './App.css'
import Header from './components/Header';
import Recommendations from './components/Recommendations';
import Orderhistory from './components/Orderhistory';
import Search from './components/Search';
import styles from './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
    
// Search bar...


function App() {
  return (
    <BrowserRouter>
      <Header> </Header> 
     <div>
        <Routes>
          <Route path="/" element={ <Recommendations /> }/>
          <Route path="/Orderhistory" element={ <Orderhistory /> } />
        </Routes>  
         
      </div>
      
    </BrowserRouter>
  );
}

export default App;