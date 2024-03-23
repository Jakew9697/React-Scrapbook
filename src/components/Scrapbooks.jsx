import React from "react";
import "./Scrapbooks.css";

const Scrapbooks = () => {
  return (
    <div className="scrapbooks-container">
      <div className="scrapbooks-content">
        <h1 className="scrapbooks-title">Scrapbooks</h1>
        <button className="new-scrapbook-button">+</button>
        <ul className="scrapbooks-list">
          <li>2023</li>
          <li>2024</li>
          <li>MSC Cruise 2023</li>
          <li>Niagra Falls 2023</li>
          <li>Beach Days</li>
          <li>Our Family</li>
        </ul>
      </div>
    </div>
  );
};

export default Scrapbooks;
