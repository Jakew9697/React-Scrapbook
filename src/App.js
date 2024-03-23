import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Scrapbooks from "./components/Scrapbooks";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar outside of Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        {/* Use "element" prop instead of "component" */}
        <Route path="/scrapbooks" element={<Scrapbooks />} />{" "}
        {/* Use "element" prop instead of "component" */}
        <Route path="/about" element={<About />} />{" "}
        {/* Use "element" prop instead of "component" */}
      </Routes>
    </Router>
  );
}

export default App;
