import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>SOBRE NÓS</h1>
        <p>
          Somos uma pizzaria tradicional focada em atender o público mais
          exigente com sabores marcentes e de qualidade. Somos uma pizzaria
          tradicional focada em atender o público mais exigente com sabores
          marcentes e de qualidade. Somos uma pizzaria tradicional focada em
          atender o público mais exigente com sabores marcentes e de qualidade.
        </p>
      </div>
    </div>
  );
}

export default About;
