import { useState } from "react";
import "./Searchbar.css";
import {
  filterasc_des,
  getrecipefilter,
  getrecipetype,
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

  function setypefilter() {
    if (inputs.type) return dispatch(getrecipetype(inputs.type));
  }

  function seHealthScorefilter() {
    if (inputs.HealthScore)
      return dispatch(getrecipeHealthScore(inputs.HealthScore));
  }

  function order() {
    if (inputs.order) return dispatch(filterasc_des(inputs.order));
  }

  function sendwords() {
    if (inputs.searched) return dispatch(getrecipefilter(inputs.searched));
  }
  function savefilter(e) {
    const property = e.target.name;
    const value = e.target.value;

    setinputs({ ...inputs, [property]: value });
  }
  console.log(inputs);
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
        <option value="ASC">ASD</option>
        <option value="DES">DES</option>
      </select>
      <label className="itemfilter">Diet types:</label>
      <select
        className="selects"
        value={inputs.type}
        name="type"
        onClick={setypefilter}
        onChange={savefilter}
      >
        <option value="all">all</option>

        <option value="vegan">vegan</option>
        <option value="dairy free">dairy free</option>
        <option value="Gluten Free">Gluten Free</option>
        <option value="Ketogenic">Ketogenic</option>
        <option value="Lacto ovo Vegetarian">Lacto Vegetarian</option>
        <option value="pescatarian">Pescetarian</option>
        <option value="paleolithic">Paleo</option>
        <option value="fodmap friendly">Low FODMAP</option>
        <option value="Primal">Primal</option>
        <option value="Whole 30">Whole30</option>
      </select>
      <label className="itemfilter">HealthScore</label>
      {/* <input
        name="HealthScore"
        value={inputs.HealthScore}
        className="itemfilter"
        placeholder="HealthScore"
        onChange={savefilter}
        type="number"
      ></input> */}
      <input
        onChange={seHealthScorefilter}
        name="HealthScore"
        value={inputs.HealthScore}
        className="itemfilter"
        placeholder="HealthScore"
        type="range"
        min="0"
        max="100"
      ></input>

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
