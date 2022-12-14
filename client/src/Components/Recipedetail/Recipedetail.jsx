/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getrecipe } from "../../actions";
import "./Recipedetail.css";
export default function Recipedetail() {
  var { id } = useParams();
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getrecipe(id));
  }, []);

  return (
    <div className="detailcontainer">
      <ul className="ulgeneral">
        <ul className="detailul">
          <li>
            <img
              className="detailimage"
              src={recipe.image}
              alt="recipeimage"
            ></img>
          </li>
        </ul>
        <ul className="datainfo">
          <li className="detailli">
            <h1 className="detailli"> {recipe.title}</h1>
            <hr></hr>
          </li>

          <li className="expolist">
            <h1 className="detailli">Dish Types:</h1>
            <ul className="detailli">
              {recipe.dishTypes?.map((e, i) => {
                return (
                  <li className="detailli" key={i}>
                    {e}{" "}
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="detailli">
            <h1 className="detailli">HealthScore: </h1>
            {recipe.healthScore}% healthy(
            <meter
              max="100"
              min="0"
              low="33"
              high="60"
              optimum="80"
              value={recipe.healthScore}
            ></meter>
            )
          </li>

          <li className="expolist">
            <h1 className="detailli">Diets types: </h1>
            <ul className="detailli">
              {recipe.diets?.map((e, i) => {
                return (
                  <li className="detailli" key={i}>
                    {e}{" "}
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="detailli">
            <h1 className="detailli">
              Summary: <hr></hr>
            </h1>
            {recipe.summary}
          </li>

          <li className="detailli">
            <h1 className="detailli">Steps:</h1>
            <ul className="detailli">
              {recipe.steps?.map((e, i) => {
                return <li key={i}>step {e}</li>;
              })}
            </ul>
          </li>
        </ul>
      </ul>
    </div>
  );
}
