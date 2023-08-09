import React, { useEffect } from "react";
import { useAppContext } from "../Context";
import { KeyboardEvent } from "react";

import "../App.css";

function SelectPokemon() {
  const { allPokemon } = useAppContext();

  const style = {
    width: "50%",
    margin: "auto",
  };

  const FilterPokemon = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(evt);
    let inputs = String(evt.currentTarget.value);
    console.log(inputs.trim());
    let matching = allPokemon?.filter((pokemon) => {
      return pokemon.name.includes(inputs.toUpperCase());
    });
    console.log(matching);
  };

  return (
    <div style={style} className="col">
      <h1>{allPokemon?.length}</h1>

      <label>Select Pokemon</label>

      <input
        name="selectPokemon"
        id="selectPokemon"
        onKeyUp={(evnt) => FilterPokemon(evnt)}
      />
      <button className="btn" type="button">
        Add
      </button>
    </div>
  );
}

export default SelectPokemon;
