import React from 'react';
import "./Home.css";

const Home = () => {
    return (
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Welcome to your Forever Scrapbook!</h1>
          <p>This Website was created for those wanting to save memories with their friends, families, and loved ones in a single place. Memories are what we all live for at the end of the day, whether you just got married, had a child, or just want to organize the fun memories from your favorite vacation. These digital scrapbooks got you covered!</p>
          <section className="section">
            <h2>About Us</h2>
            <p>I am a software developer, a Dog Father of 4, a Cat Father of 6..., a musician, and a loving boyfriend to my soulmate. She is actually the reason I started developing this webiste. See, my girlfriend and I, we like to adventure, above and beyond to be honest, and we like to take our 4 dogs with us and jam pack our phones with photos and videos of our escapades so we can than print those photos off and build scrapbooks out of them. I build this tool not to replace our niche of traditional scrapbooking, but to expand it to a realm where our treasured memories cant be devoured by our rambunctious dogs! I hope you will find good use of this website and forever keep those special moments alive.</p>
          </section>
        </div>
      </div>
    );
  }

export default Home;
