import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "./App.css";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${scrollY > 20 ? "sticky" : ""}`}>
        <div className="logo-container show">My Logo</div>
        <div className="menu-btn" onClick={() => {
          document.querySelector(".menu").classList.toggle("active");
          document.querySelector(".menu-btn i").classList.toggle("active");
        }}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      
      <header className="header">
        <h1>
          I'm a <ReactTyped
            strings={["AWS Solution Architect!", "DevOps Engineer!", "Java Developer!", "Freelancer!"]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </h1>
      </header>

      <button className={`scroll-up-btn ${scrollY > 500 ? "show" : ""}`} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        ↑
      </button>
    </div>
  );
};

export default App;
