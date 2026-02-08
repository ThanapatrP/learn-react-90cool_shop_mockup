import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./views/home/Home";
import AboutMe from "./views/about/AboutMe";

import NavBar from "./comps/navbar/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
