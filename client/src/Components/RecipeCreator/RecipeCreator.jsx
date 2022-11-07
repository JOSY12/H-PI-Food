/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./RecipeCreator.css";
import { createrecipe } from "../../actions";

export default function RecipeCreator() {
  const dispatch = useDispatch();

  const [Errors, setErrors] = useState({});

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

    if (
      !inputs.summary ||
      !inputs.title ||
      !inputs.healthScore ||
      Errors.healthScore
    ) {
      alert("complete the recipe title, summary, healthScore");
    } else if (Errors.title) {
      alert("title is invalid");
    } else if (inputs.summary.length > 500 || Errors.summary) {
      alert("summary is invalid");
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
      console.log(inputs + "recipe created succesfully");

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
    let Errors = {};
    if (!input.title) {
      Errors.title = "title is required";
    } else if (input.title.length <= 10) {
      Errors.title = "title is too short";
    } else if (input.title.length >= 50) {
      Errors.title = "title is too long";
    }
    if (/\d|\\w|[~!@#$%{^&*()_:.=';[}|"`?>><]/gm.test(input.title)) {
      Errors.title = "title is invalid";
    }
    if (!input.summary) {
      Errors.summary = "summary is required";
    } else if (input.summary.length <= 50) {
      Errors.summary = "summary is too short";
    } else if (input.summary.length >= 500) {
      Errors.summary = "summary is too long";
    }
    if (!input.healthScore || input.healthScore <= 0) {
      Errors.healthScore = "healthScore value  is required";
    }
    if (!inputs.image || inputs.image <= 0 || inputs.image.includes(" ")) {
      Errors.image = "invalid recipe image";
    }
    //////////////////////////////////////////////
    //expresiones posiblemente necesesarias
    // if (/\d|\\w|[~!@#$%{^&*()_:.=';[}|"`?>><]/gm.test(input.summary)) {
    //   Errors.summary = "summary is invalid";
    // }
    // if (/\d|\\w|[~!@#$%{^&*()_:.=';[}|"`?>><]/gm.test(input.steps)) {
    //   Errors.steps = "atleast one steps is required";
    // }
    //////////////////////////////////////////////
    // if (!input.diets) {
    //   Errors.diets = "atleast one diet is required";
    // }
    // if (!input.dishTypes) {
    //   Errors.dishTypes = "atleast one dishType is required";
    // }
    // if (!input.steps ) {
    //   Errors.steps = "atleast one steps is required";
    // }

    return Errors;
  }

  function saverecipe(e) {
    if (!inputs.image || inputs.image.includes(" ") || inputs.image <= 0) {
      inputs.image =
        "http://www.destenaire.com/noaccess/wp-content/uploads/2014/10/8-Oddest-Food-Items-Featured-Image1.png";
    }
    const property = e.target.name;
    const value = e.target.value;
    setinputs({ ...inputs, [property]: value });
    setErrors(validate({ ...inputs, [property]: value }));
  }
  console.log(Errors);
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
        {Errors.title && <p className="Errors">{Errors.title}</p>}
        <label className="formlabel">
          image url <small>Optional</small>
        </label>
        {Errors.image && <p className="Errors">{Errors.image}</p>}
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
          {Errors.summary && <p className="Errors">{Errors.summary}</p>}
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
          {Errors.healthScore && <p className="Errors">{Errors.healthScore}</p>}
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
        {Errors.diets && <p className="Errors">{Errors.diets}</p>}
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
        {Errors.dishTypes && <p className="Errors">{Errors.dishTypes}</p>}
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
        {Errors.steps && <p className="Errors">{Errors.steps}</p>}
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
