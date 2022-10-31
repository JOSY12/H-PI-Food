import { useState } from "react";
import "./Searchbar.css";
// import { filterecipe } from "../../actions";

export default function Searchbar() {
  var [word, setword] = useState("");

  function setwords(e) {
    setword(e.target.value);
  }
  function sendword(e) {
    // dispatch(filterecipe(word));
    console.log(word);
  }

  return (
    <div>
      <input placeholder="Recipe" onChange={setwords}></input>
      <button onClick={sendword}>Search</button>
    </div>
  );
}
