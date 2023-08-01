import React, { useEffect } from "react";
import { useAppContext } from "../Context";

import "../App.css";

function SelectPokemon() {
  const { allPokemon } = useAppContext();

  const style = {
    width: "50%",
    margin: "auto",
  };

  return (
    <div style={style} className="col">
      <h1>{allPokemon?.length}</h1>

      <label>Select Pokemon</label>

      <input name="selectPokemon" id="selectPokemon" />
      <button className="btn" type="button">
        Add
      </button>
    </div>
  );
}

export default SelectPokemon;
