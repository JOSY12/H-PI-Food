// Pagina inicial: deben armar una landing page con

// [ ] Alguna imagen de fondo representativa al proyecto
// [ ] Botón para ingresar al home (Ruta principal)

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="homecontainer">
      <Link className="link" to={"/recipes"}>
        Recipe home page
      </Link>
    </div>
  );
}
