import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Entre em contato</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome completo</label>
          <input
            name="name"
            placeholder="Coloque seu nome completo..."
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Coloque seu melhor email..."
            type="email"
          />
          <label htmlFor="message">Mensagem</label>
          <textarea
            rows="6"
            placeholder="Digite sua mensagem..."
            name="message"
            required
          ></textarea>
          <button type="submit">Envia sua mensagem!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
