import { useState } from "react";
import "./Searchbar.css";
import { filterasc_des, getrecipefilter, getrecipetype } from "../../actions";
import { useDispatch } from "react-redux";

export default function Searchbar() {
  const [inputs, setinputs] = useState({ order: "", type: "", searched: "" });

  const dispatch = useDispatch();
  // function setwords(e) {
  //   e.preventDefault();
  //   setword(e.target.value);
  //   dispatch(getrecipefilter(word));
  // }

  function setypefilter() {
    dispatch(getrecipetype(inputs.type));
  }

  function order() {
    dispatch(filterasc_des(inputs.order));
  }

  function sendwords() {
    dispatch(getrecipefilter(inputs.searched));
  }
  function savefilter(e) {
    const property = e.target.name;
    const value = e.target.value;

    setinputs({ ...inputs, [property]: value });
    console.log(inputs);
  }

  return (
    <div className="divsearchgenearl">
      <input
        name="searched"
        value={inputs.searched}
        className="itemfilter"
        placeholder="Recipe..."
        onChange={savefilter}
      ></input>
      <button className="itemfilter" onClick={sendwords}>
        Search
      </button>
      <label className="itemfilter">Order:</label>
      <select
        value={inputs.order}
        name="order"
        onClick={order}
        onChange={savefilter}
      >
        <option value="ASD">ASD</option>
        <option value="DES">DES</option>
      </select>
      <label className="itemfilter">Diet types:</label>
      <select
        value={inputs.type}
        name="type"
        onClick={setypefilter}
        onChange={savefilter}
      >
        <option value="all">all</option>
        <option value="vegetarian">vegetarian</option>
        <option value="vegan">vegan</option>
        <option value="dairy free">dairy free</option>
        <option value="Gluten Free">Gluten Free</option>
        <option value="Ketogenic">Ketogenic</option>
        <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
        <option value="Ovo-Vegetarian ">Ovo-Vegetarian</option>
        <option value="Pescetarian">Pescetarian</option>
        <option value="Paleo">Paleo</option>
        <option value="Low FODMAP">Low FODMAP</option>
        <option value="Primal">Primal</option>
        <option value="Whole30">Whole30</option>
      </select>
    </div>
  );
}
