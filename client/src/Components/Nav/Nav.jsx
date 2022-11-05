import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="navcontainer">
      <nav className="nav">
        <ul className="navul">
          <Link to={"/recipes"}>
            <li className="navli">Home</li>
          </Link>

          <Link to={"/create"}>
            <li className="navli">Create Recipe</li>
          </Link>

          <Link to={"/diets"}>
            <li className="navli">Diets</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
