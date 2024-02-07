import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Test from './Components/Test';
import Navbar from "./Components/Navbar";

import ProductPortfolio from "./Components/ProductPortfolio";

import SmartLC from "./Components/SmartLC";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
          
          <Route path="/ProductPortfolio" element={<ProductPortfolio />} />
          
          <Route path="/SmartLC" element={<SmartLC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;