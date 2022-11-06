/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./RecipeCreator.css";
import { createrecipe } from "../../actions";

export default function RecipeCreator() {
  const dispatch = useDispatch();

  const [errors, seterrors] = useState({});
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
  const handleSteps = () => {
    if (inputs.listSteps.length) {
      setinputs({
        ...inputs,
        steps: [...inputs.steps, inputs.listSteps],
        listSteps: "",
      });
    }
  };

  function validate(input) {
    let errors = {};
    if (!input.title) {
      errors.title = "title is required";
    } else if (input.title.length <= 10) {
      errors.title = "title is too short";
    } else if (input.title.length >= 50) {
      errors.title = "title is too long";
    }
    if (!input.summary) {
      errors.summary = "summary is required";
    } else if (input.summary.length <= 50) {
      errors.summary = "summary is too short";
    } else if (input.summary.length >= 500) {
      errors.summary = "summary is too long";
    }

    if (!input.healthScore || input.healthScore <= 0) {
      errors.healthScore = "healthScore value  is required";
    }

    // if (!inputs.image || inputs.image <= 0 || inputs.image.includes(" ")) {
    //   errors.image = "invalid recipe image";
    // }
    // if (!input.diets) {
    //   errors.diets = "atleast one diet is required";
    // }
    // if (!input.dishTypes) {
    //   errors.dishTypes = "atleast one dishType is required";
    // }
    // if (!input.steps ) {
    //   errors.steps = "atleast one steps is required";
    // }

    return errors;
  }

  function saverecipe(e) {
    if (!inputs.image || inputs.image.includes(" ") || inputs.image <= 0) {
      inputs.image =
        "http://www.destenaire.com/noaccess/wp-content/uploads/2014/10/8-Oddest-Food-Items-Featured-Image1.png";
    }
    const property = e.target.name;
    const value = e.target.value;
    setinputs({ ...inputs, [property]: value });
    seterrors(validate({ ...inputs, [property]: value }));
  }
  console.log(errors);
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
        {errors.title && <p className="errors">{errors.title}</p>}
        <label className="formlabel">
          image url <small>Optional</small>
        </label>
        {errors.image && <p className="errors">{errors.image}</p>}
        <input
          className="inputs"
          type={"text"}
          value={inputs.image}
          onChange={saverecipe}
          name="image"
        ></input>
        <img className="inputs" src={inputs.image} alt="invalidfoodimage"></img>

        <label className="formlabel">
          Recipe details, summary{" "}
          {errors.summary && <p className="errors">{errors.summary}</p>}
        </label>

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
          {errors.healthScore && <p className="errors">{errors.healthScore}</p>}
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
        {errors.diets && <p className="errors">{errors.diets}</p>}
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
        {errors.dishTypes && <p className="errors">{errors.dishTypes}</p>}
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
        {errors.steps && <p className="errors">{errors.steps}</p>}
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
