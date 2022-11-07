import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleterecipe } from "../../actions";
import "./Recipe.css";
export default function Recipe({
  id,
  title,
  image,
  diets,
  dishTypes,
  healthScore,
}) {
  const dispatch = useDispatch();
  function deleterecipes() {
    dispatch(deleterecipe(id));
  }

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

            <ul className="recipedatali">
              healthScore: {healthScore}% healthy (
              <meter
                max="100"
                min="0"
                low="33"
                high="60"
                optimum="80"
                value={healthScore}
              ></meter>
              )
            </ul>
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
      <button className="deleteboton" onClick={deleterecipes}>
        Delete
      </button>
    </div>
  );
}
