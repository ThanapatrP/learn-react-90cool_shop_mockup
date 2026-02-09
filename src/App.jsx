import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./views/home/Home";
import AboutUs from "./views/about/AboutUs";

import NavBar from "./comps/navbar/NavBar";
import Padder from "./comps/Padder";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
