import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cvs" element={<CVS />} />
          <Route path="/library" element={<Library />} />
          <Route path="/sphere" element={<Sphere />} />
          <Route path="/botw" element={<BOTW />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;