import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from "./Landing_page/home/HomePage";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import SignUp from "./Landing_page/signup/SignUp";
import AboutPage from "./Landing_page/about/AboutPage";
import ProductsPage from "./Landing_page/products/ProductsPage";
import PricingPage from "./Landing_page/pricing/PricingPage";
import Support from "./Landing_page/support/Support";

import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import NotFound from "./Landing_page/NotFound";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <BrowserRouter>
   <Navbar/>
 <Routes>
         <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound/>}/>

 </Routes>
 <Footer/>
 </BrowserRouter>
);

