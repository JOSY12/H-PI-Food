import { useState } from "react";
import "./Searchbar.css";
// import { gerecipefilter } from "../../actions";
// import { useDispatch } from "react-redux";

export default function Searchbar() {
  var [word, setword] = useState("");
  // const dispatch = useDispatch();
  function setwords(e) {
    setword(e.target.value);
  }
  function sendword(e) {
    // dispatch(gerecipefilter(word));
    console.log(word);
  }

  return (
    <div className="divsearchgenearl">
      <input
        className="itemfilter"
        placeholder="Recipe..."
        onChange={setwords}
      ></input>
      <button className="itemfilter" onClick={sendword}>
        Search
      </button>
      <label className="itemfilter">Diet types:</label>

      <select name="diets">
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
