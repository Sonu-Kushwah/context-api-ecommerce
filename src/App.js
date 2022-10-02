import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import ProdectContentProvider from './global/ProdectContent';
import CardContextProvider from './global/CardContext';
import Products from './component/Products';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <ProdectContentProvider>
      <CardContextProvider>
      <Router>
      <Navbar />
      <Banner />
      <Routes>
      <Route  path="/" element={<Products/>}/>
      <Route  path="/Cart" element={<Cart/>}/>
      </Routes>
      </Router>
      </CardContextProvider>
      </ProdectContentProvider>
  

    
   </>
  );
}

export default App;
