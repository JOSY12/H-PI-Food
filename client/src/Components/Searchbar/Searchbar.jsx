import { useState } from "react";
import "./Searchbar.css";
import {
  getrecipefilter,
  getrecipetype,
  filterasc_des,
  horder,
} from "../../actions";
import { useDispatch } from "react-redux";

export default function Searchbar() {
  const [inputs, setinputs] = useState({
    order: "",
    type: "",
    searched: "",
    HealthScore: "",
  });

  const dispatch = useDispatch();

  function type(e) {
    setinputs({ ...inputs, type: e.target.value });
    dispatch(getrecipetype(inputs.type));
  }

  function order(e) {
    setinputs({ ...inputs, order: e.target.value });
    dispatch(filterasc_des(inputs.order));
  }
  function Horder(e) {
    setinputs({ ...inputs, HealthScore: e.target.value });
    dispatch(horder(inputs.HealthScore));
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
      {/* /////////////////////////////////////////////////////////////// */}
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
      {/* /////////////////////////////////////////////////////////////// */}
      <label className="itemfilter">HealthScore order:</label>
      <select
        className="selects"
        value={inputs.HealthScore}
        name="HealthScore"
        onClick={Horder}
        onChange={savefilter}
      >
        <option value="Low To Hight">Low To Hight</option>
        <option value="Hight to Low">Hight to Low</option>
      </select>
      {/* /////////////////////////////////////////////////////////////// */}
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
        <option value="Lacto ovo Vegetarian">Lacto ovo Vegetarian</option>
        <option value="Lacto Vegetarian">Lacto Vegetarian</option>
        <option value="pescatarian">Pescetarian</option>
        <option value="paleolithic">paleolithic</option>
        <option value="Ovo Vegetarian">Ovo Vegetarian</option>
        <option value="fodmap friendly">Low FODMAP</option>
        <option value="Primal">Primal</option>
        <option value="Whole 30">Whole30</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>
      {/* /////////////////////////////////////////////////////////////// */}
      <label className="itemfilter">-----</label>

      {/* /////////////////////////////////////////////////////////////// */}
      <input
        name="searched"
        value={inputs.searched}
        className="itemfilter"
        placeholder="Recipe..."
        onChange={savefilter}
        type="text"
      ></input>
      {/* /////////////////////////////////////////////////////////////// */}
      <button className="itemfilter" onClick={sendwords}>
        Search
      </button>
    </div>
  );
}
