import { Link } from "react-router-dom";
import "./Recipe.css";
export default function Recipe({ id, title, image, diets, dishTypes }) {
  return (
    <div className="recipecontainer">
      <ul className="recipeul">
        <li className="recipeli">
          <Link className="recipeli" to={`/recipes/${id}`}>
            {title}
          </Link>
        </li>
        <li>
          <Link to={`/recipes/${id}`}>
            <img className="recipeimage" src={image} alt="recipeimage"></img>
          </Link>
        </li>

        <ul className="recipeul">
          diets:
          {diets.map((e, index) => {
            return (
              <li className="recipeli" key={index}>
                ✓{e}
              </li>
            );
          })}
        </ul>
        <ul className="recipeul">
          dishTypes:
          {dishTypes.map((e, index) => {
            return (
              <li className="recipeli" key={index}>
                ✓{e}
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
}
