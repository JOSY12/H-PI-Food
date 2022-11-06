/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./RecipeCreator.css";
import { createrecipe } from "../../actions";

export default function RecipeCreator() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  const [inputs, setinputs] = useState({
    title: "",
    summary: "",
    image: "",
    diets: [],
    dishTypes: [],
    healthScore: 0,
    steps: [],
    listSteps: "",
  });

  function diets(e) {
    if (!inputs.diets.includes(e.target.value)) {
      inputs.diets.push(e.target.value);
    }
  }
  function dishTypes(e) {
    if (!inputs.dishTypes.includes(e.target.value)) {
      inputs.dishTypes.push(e.target.value);
    }
  }
  function sendrecipe(e) {
    e.preventDefault();

    if (!inputs.summary || !inputs.title || !inputs.healthScore) {
      alert("complete the recipe title, summary, healthScore");
    } else if (inputs.title.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) {
      alert("title canot include numbers");
    } else if (inputs.summary.length > 500) {
      alert("summary canot include more than 500 characters");
    } else {
      dispatch(
        createrecipe(
          inputs.steps,
          inputs.title,
          inputs.summary,
          inputs.image,
          inputs.diets,
          inputs.healthScore,
          inputs.dishTypes
        )
      );

      console.log(inputs);

      alert("recipe created succesfully");
    }
  }
  const handleSteps = (e) => {
    if (inputs.listSteps.length) {
      setinputs({
        ...inputs,
        steps: [...inputs.steps, inputs.listSteps],
        listSteps: "",
      });
    }
  };
  function saverecipe(e) {
    if (!inputs.image) {
      inputs.image =
        "http://www.destenaire.com/noaccess/wp-content/uploads/2014/10/8-Oddest-Food-Items-Featured-Image1.png";
    }
    const property = e.target.name;
    const value = e.target.value;

    setinputs({ ...inputs, [property]: value });
  }

  return (
    <div className="recipecreator">
      <form className="inputsform" onSubmit={sendrecipe}>
        <label className="formlabel">title</label>
        <input
          className="inputs"
          type={"text"}
          value={inputs.title}
          onChange={saverecipe}
          name="title"
        ></input>
        <label className="formlabel">
          image url <small>Optional</small>
        </label>
        <input
          className="inputs"
          type={"text"}
          value={inputs.image}
          onChange={saverecipe}
          name="image"
        ></input>
        <img className="inputs" src={inputs.image} alt="invalidfoodimage"></img>

        <label className="formlabel">Recipe details, summary</label>
        <textarea
          type="text"
          className="inputs"
          value={inputs.summary}
          placeholder="recipe summary..."
          onChange={saverecipe}
          name="summary"
          rows="10"
          cols="50"
        ></textarea>
        <label className="formlabel">
          health score level: {inputs.healthScore} % healthy
          <meter
            max="100"
            min="0"
            low="33"
            high="60"
            optimum="80"
            value={inputs.healthScore}
          ></meter>
        </label>
        <input
          onChange={saverecipe}
          name="healthScore"
          value={inputs.healthScore}
          className="heal"
          type="range"
          min="0"
          max="100"
        ></input>

        <label className="formlabel">diet type: </label>
        <select
          onClick={diets}
          className="inputs"
          multiple
          onChange={diets}
          value={inputs.diets}
          name="diets"
        >
          <option value="vegan">vegan</option>
          <option value="dairy free">dairy free</option>
          <option value="Gluten Free">Gluten Free</option>
          <option value="Ketogenic">Ketogenic</option>
          <option value="Lacto ovo Vegetarian">Lacto ovo Vegetarian</option>
          <option value="Lacto Vegetarian">Lacto Vegetarian</option>
          <option value="Ovo Vegetarian">Ovo Vegetarian</option>
          <option value="Pescetarian">Pescetarian</option>
          <option value="Paleolithic">Paleolithic</option>
          <option value="fodmap friendly">Low FODMAP</option>
          <option value="Primal">Primal</option>
          <option value="Whole 30">Whole30</option>
          <option value="Vegetarian">Vegetarian</option>"
        </select>
        <label className="formlabel">dish Type: </label>
        <select
          className="inputs"
          multiple
          onChange={dishTypes}
          value={inputs.dishTypes}
          name="dishTypes"
        >
          <option value="lunch">lunch</option>
          <option value="main course">main course</option>
          <option value="main dish">main dish</option>
          <option value="side dish">side dish</option>
          <option value="salad">salad</option>
          <option value="soup">soup</option>
          <option value="dinner">dinner</option>
        </select>
        <label className="formlabel">steps</label>
        {/* <textarea
          value={inputs.steps}
          onChange={saverecipe}
          name="steps"
          rows="10"
          cols="50"
          type="text"
          className="inputs"
          placeholder="recipe steps"
        ></textarea> */}
        <input
          type="text"
          className="input-create"
          onChange={saverecipe}
          value={inputs.listSteps}
          name="listSteps"
        />
        <button className="btn-create" onClick={handleSteps} type="button">
          Add
        </button>
        <div className="list-steps">
          {inputs.steps.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </div>

        <button className="inputs" type="submit">
          Create Recipe
        </button>
      </form>
    </div>
  );
}
