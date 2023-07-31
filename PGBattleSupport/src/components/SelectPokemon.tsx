import React, { useEffect } from "react";
import { useAppContext } from "../Context";

function SelectPokemon() {
  return (
    <div>
      <div>SelectPokemon</div>
      <label>Select Pokemon</label>
      <input name="selectPokemon" id="selectPokemon" />
      <button type="button">Add</button>
    </div>
  );
}

export default SelectPokemon;
