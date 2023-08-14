import React, { useState } from "react";
import { useAppContext } from "../Context";
import { Pokemon } from "../Interfaces/Pokemon";

function AutofillTab({ pokemon }: { pokemon: Pokemon }) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>();
  const [hover, SetHover] = useState<Boolean>(false);

  const handleMouseEnter = () => {
    SetHover(true);
  };

  const handleMouseLeave = () => {
    SetHover(false);
  };

  const onSelectedClick = () => {
    console.log(pokemon);
    setSelectedPokemon(pokemon);
  };

  const style = {
    backgroundColor: hover ? "green" : "white",
    cursor: "pointer",
    color: hover ? "white" : "black",
    width: "100%",
    display: "block",
  };

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelectedClick}
    >
      {pokemon.name}
    </div>
  );
}

export default AutofillTab;
