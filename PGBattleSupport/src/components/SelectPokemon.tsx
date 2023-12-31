import React, { useEffect, useState } from "react";
import { useAppContext } from "../Context";
import { Pokemon } from "../Interfaces/Pokemon";
import "../App.css";
import AutofillTab from "./AutofillTab";

function SelectPokemon() {
  const { allPokemon, selectedPokemon, setSelectedPokemon } = useAppContext();
  const [characters, SetCharacters] = useState("");
  const [matching, SetMatching] = useState<Pokemon[] | undefined>([]);
  const [UI, SetUI] = useState<HTMLElement | undefined>();
  const style = {
    width: "50%",
    margin: "auto",
  };

  const autoFillField = {
    display: "block",
    backgroundColor: "white",
    color: "black",
  };

  useEffect(() => {
    if (selectedPokemon) {
      SetMatching([]);
    }
  }, [selectedPokemon]);

  const FilterPokemon = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    let inputs = String(evt.currentTarget.value);
    //get input field
    SetUI(evt.currentTarget);
    //get textbox input value
    SetCharacters(evt.currentTarget.value);

    let match = allPokemon?.filter((pokemon) => {
      return pokemon.name.includes(inputs.toUpperCase());
    });
    SetMatching(match);
  };

  return (
    <div style={style} className="col">
      <h1>{allPokemon?.length}</h1>

      <label>Select Pokemon</label>
      <div id="AutoFill">
        <input
          name="selectPokemon"
          id="selectPokemon"
          onKeyUp={(evnt) => FilterPokemon(evnt)}
        />
        {matching?.length != 0 &&
          matching?.map((item) => {
            return <AutofillTab pokemon={item} />;
          })}
      </div>

      <button className="btn" type="button">
        Add
      </button>
    </div>
  );
}

export default SelectPokemon;
