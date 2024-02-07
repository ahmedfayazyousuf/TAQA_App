import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Test from './Components/Test';
import Navbar from "./Components/Navbar";

import ProductPortfolio from "./Components/ProductPortfolio";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
          
          <Route path="/ProductPortfolio" element={<ProductPortfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;