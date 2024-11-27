import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Pilar from "./components/Pilar";
import Recomendations  from "./components/Recomendations";
import Leo from "./components/Leo";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <header className="main-header">
        <nav className="navbar">
          <div className="logo">GrowthPro</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Unlock Your Full Potential</h1>
        <p>Empowering you to achieve greatness and transform your life.</p>
        <div className="hero-buttons">
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </section>

      <section id="services" className="services">
      <Card /> 
      </section>
        
      <section id="pilars" className="pilars">
      <Pilar />
      </section>

      <section id="recomendations" className="recomendations">
        <Recomendations />
      </section>

      <section id="know-me" className="know-me">
        <h1>FRASE MOTIVACIONAL</h1>
        <Leo />
      </section>

      <section id="stats" className="stats">
        <h1>The Leo effect</h1>

        <p>nvekvbdkvdedolvmdk ji ei enivdkj ndfivsilmkdj ovjk
          cnjdcsdkj ndjn dkjn jn jn jdfn jknd kd ndj 
        </p>
        
        <Stats /> 
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          At GrowthPro, we specialize in personal development, coaching, and
          empowerment strategies to help you achieve your goals.
        </p>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonials-container">
          <blockquote>
            "GrowthPro changed my life. Highly recommend!" — Jane Doe
          </blockquote>
          <blockquote>
            "The best decision I ever made for my personal development." — John
            Smith
          </blockquote>
        </div>
      </section>

      <footer className="main-footer">
        <p>&copy; 2024 GrowthPro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

