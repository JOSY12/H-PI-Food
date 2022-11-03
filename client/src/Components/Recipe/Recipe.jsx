import { Link } from "react-router-dom";
import "./Recipe.css";
export default function Recipe({
  id,
  title,
  image,
  diets,
  dishTypes,
  healthScore,
}) {
  return (
    <div className="recipecontainer">
      <Link to={`/recipes/${id}`}>
        <ul className="recipeulgeneral">
          <ul className="imageul">
            <li className="imagerecipeli">
              <img className="imagerecipe" src={image} alt="recipeimage"></img>
            </li>
          </ul>
          <ul className="recipedataul">
            <ul className="recipedatali"> {title}</ul>

            <ul className="recipedatali">healthScore: {healthScore}</ul>
            <ul className="recipedatali">
              dish type:
              {dishTypes.map((e, index) => {
                return (
                  <li key={index} className="recipedatali">
                    🍲{e}
                  </li>
                );
              })}
            </ul>

            <ul className="recipedatali">
              diets type:
              {diets.map((e, index) => {
                return (
                  <li key={index} className="recipedatali">
                    🥗{e}
                  </li>
                );
              })}
            </ul>
          </ul>
        </ul>
      </Link>
    </div>
  );
}

//   diets.map((e, index) => {
//     return (
//       <li key={index} className="recipedatali">
//         🥗{e}
//       </li>
//     );
//   });
