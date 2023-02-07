import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import AppCard from "./components/cards/appcard";
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/retiringroom" element={<About />}></Route>
          <Route path="/railmadad" element={<About />}></Route>
          <Route path="/indianrail" element={<About />}></Route>
          <Route path="/pnr" element={<About />}></Route>
          <Route path="/nget" element={<About />}></Route>
          <Route path="/detailview" element={<AppCard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
