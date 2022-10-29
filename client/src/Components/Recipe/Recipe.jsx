import { Link } from "react-router-dom";

export default function Recipe({ id, title, image, diets, healthScore }) {
  return (
    <div>
      <ul>
        <Link to={`/recipes/${id}`}>
          <li>{title}</li>
        </Link>

        <li>
          <img src={image} alt="imagen de receta"></img>
        </li>
        <li>{diets}</li>
        <li>{healthScore}</li>
      </ul>
    </div>
  );
}
