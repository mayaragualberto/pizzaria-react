import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Pizzaria React</h1>
        <p>A PIZZA PARA TODOS OS GOSTOS</p>
        <Link to="/menu">
          <button>FAÇA SEU PEDIDO</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
