import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import './index.css'
import Hero2 from "../components/Hero2";
import Article from "../components/Article";
import Articles from "../components/Article";
import Carousel from "../components/Carousel";
import { ARTICLES } from "../src/data";
import { ArticleLeft } from "../components/Article";
import Contacts from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Products from "../components/Products";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";

function App() {
 
  return (
    <BrowserRouter>
    
    <>
    <Routes>

    <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs/>} />

        </Route>       
    </Routes>
    </>
    </BrowserRouter>

  );
}

export default App;
