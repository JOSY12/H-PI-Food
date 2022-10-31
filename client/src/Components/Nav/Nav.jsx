import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <Link to={"/recipes"}>
            <li>home</li>
          </Link>

          <Link to={"/create"}>
            <li>create</li>
          </Link>

          <Link to={"/diets"}>
            <li>Diets</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
