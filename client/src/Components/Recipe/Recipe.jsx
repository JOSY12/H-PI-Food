import { Link } from "react-router-dom";
import "./Recipe.css";
export default function Recipe({ id, title, image, diets, healthScore }) {
  return (
    <div>
      <ul>
        <li>
          <Link to={`/recipes/${id}`}>{title}</Link>
        </li>

        <li>
          <Link to={`/recipes/${id}`}>
            <img src={image} alt="recipeimage"></img>
          </Link>
        </li>
        <ul>
          diets:
          {diets.map((e, index) => {
            return <li key={index}>{e}</li>;
          })}
        </ul>
        <li>healthScore:{healthScore}</li>
      </ul>
    </div>
  );
}
