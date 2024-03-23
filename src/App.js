import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Scrapbooks from "./components/Scrapbooks";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Navbar />{" "}
      {/* Rendering Navbar outside of Routes to keep it present in all views. */}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/scrapbooks" element={<Scrapbooks />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/signup" element={<SignUp />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
