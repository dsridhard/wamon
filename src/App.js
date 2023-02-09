import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import AppCard from "./components/appcard";
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/retiringroom" element={<AppCard />}></Route>
          <Route path="/railmadad" element={<AppCard />}></Route>
          <Route path="/indianrail" element={<AppCard />}></Route>
          <Route path="/PNRInquiry" element={<AppCard />}></Route>
          <Route path="/nget" element={<AppCard />}></Route>
          <Route path="/detailview" element={<AppCard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
