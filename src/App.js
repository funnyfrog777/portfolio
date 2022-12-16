import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop"

import Home from './pages/Home';
import CVS from './pages/CVS';
import Library from './pages/Library'
import Sphere from './pages/Sphere';
import BOTW from './pages/BOTW';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />
          <Route path="/portfolio/cvs" element={<CVS />} />
          <Route path="/portfolio/library" element={<Library />} />
          <Route path="/portfolio/sphere" element={<Sphere />} />
          <Route path="/portfolio/botw" element={<BOTW />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;