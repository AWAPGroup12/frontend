
import './App.css';
import Heading from './components/Heading';
import Heading2 from './components/Heading2';
import NewMenu from './components/NewMenu';
import NewRestaurant from './components/NewRestaurant';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  
    <div>
   
   
    <BrowserRouter>
    <Heading/>
    <Heading2/>
  <Routes>
  <Route path="/newrestaurantmenu" element={<NewRestaurant/>}/>
    <Route path="/newrestaurant" element={ <NewMenu/>}/>
  </Routes>
 
  </BrowserRouter>
    
    </div>

  );
}

export default App;
