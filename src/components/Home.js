import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to your forever Scrapbook!</h1>
        <p className="home-text">
          This Website was created for those wanting to save memories with their
          friends, families, and loved ones in a single place. Memories are what
          we all live for at the end of the day, whether you just got married,
          had a child, or just want to organize the fun memories from your
          favorite vacation. Take your scrapbook with you everywhere you go!
        </p>
        <button className="welcome-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
