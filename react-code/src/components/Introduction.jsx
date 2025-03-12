import React from "react";
import { ReactTyped } from "react-typed";
import "../styles/Introduction.css";

const Introduction = () => {
  return (
    <section className="introduction" id="about">
      <div className="container">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hi, I'm <strong>Your Name</strong>, a passionate <span className="typing">
            <ReactTyped
              strings={["AWS Solution Architect", "DevOps Engineer", "Java Developer", "Freelancer"]}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </span>.
        </p>
        <p>
          I specialize in building scalable cloud solutions, automating deployments, and optimizing system performance.
          With a deep understanding of cloud architecture and software development, I create efficient and robust
          applications tailored to business needs.
        </p>
        <p>Let's build something amazing together! 🚀</p>
      </div>
    </section>
  );
};

export default Introduction;
