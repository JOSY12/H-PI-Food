import { useState } from "react";
import "./Searchbar.css";
import {
  getrecipefilter,
  getrecipetype,
  filterasc_des,
  getrecipeHealthScore,
} from "../../actions";
import { useDispatch } from "react-redux";

export default function Searchbar() {
  const [inputs, setinputs] = useState({
    order: "",
    type: "",
    searched: "",
    HealthScore: 0,
  });

  const dispatch = useDispatch();

  function type(e) {
    setinputs({ ...inputs, type: e.target.value });
    dispatch(getrecipetype(inputs.type));
  }

  function HealthScorefilter(e) {
    setinputs({ ...inputs, HealthScore: e.target.value });
    dispatch(getrecipeHealthScore(inputs.HealthScore));
  }

  function order(e) {
    setinputs({ ...inputs, order: e.target.value });
    dispatch(filterasc_des(inputs.order));
  }
  function sendwords(e) {
    dispatch(getrecipefilter(inputs.searched));
  }
  function savefilter(e) {
    e.preventDefault();
    const property = e.target.name;
    const value = e.target.value;

    setinputs({ ...inputs, [property]: value });
  }

  return (
    <div className="divsearchgenearl">
      <label className="itemfilter">Order:</label>
      <select
        className="selects"
        value={inputs.order}
        name="order"
        onClick={order}
        onChange={savefilter}
      >
        <option value="ASC">ASC</option>
        <option value="DES">DES</option>
      </select>
      <label className="itemfilter">Diet types:</label>
      <select
        className="selects"
        value={inputs.type}
        name="type"
        onChange={type}
        onClick={type}
      >
        <option value="all">all</option>

        <option value="vegan">vegan</option>
        <option value="dairy free">dairy free</option>
        <option value="Gluten Free">Gluten Free</option>
        <option value="Ketogenic">Ketogenic</option>
        <option value="Lacto ovo Vegetarian">Lacto Vegetarian</option>
        <option value="pescatarian">Pescetarian</option>
        <option value="paleolithic">Paleo</option>
        <option value="Ovo Vegetarian">Ovo Vegetarian</option>
        <option value="fodmap friendly">Low FODMAP</option>
        <option value="Primal">Primal</option>
        <option value="Whole 30">Whole30</option>
      </select>
      <label className="itemfilter">HealthScore</label>

      <input
        onChange={HealthScorefilter}
        name="HealthScore"
        className="itemfilter"
        type="range"
        min="0"
        max="100"
        value={inputs.value}
      ></input>
      <li className="itemfilter"> {inputs.HealthScore}</li>
      <input
        name="searched"
        value={inputs.searched}
        className="itemfilter"
        placeholder="Recipe..."
        onChange={savefilter}
        type="text"
      ></input>
      <button className="itemfilter" onClick={sendwords}>
        Search
      </button>
    </div>
  );
}
