import chef from "../../images/chefwhiet.jpg";

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="homecontainer">
      <Link to={"/recipes"}>
        <img className="itemimage" src={chef} alt=""></img>
      </Link>

      <Link className="homelink" to={"/recipes"}>
        Recipes Home Page
      </Link>

      <footer className="footer">HENRY PI FOOD BY josmer uriel bertel</footer>
    </div>
  );
}
