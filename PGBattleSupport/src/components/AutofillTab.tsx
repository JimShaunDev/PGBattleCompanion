import React, { useState } from "react";
import { useAppContext } from "../Context";
import { Pokemon } from "../Interfaces/Pokemon";

function AutofillTab({ pokemon }: { pokemon: Pokemon }) {
  const { setSelectedPokemon } = useAppContext();
  const [hover, SetHover] = useState<Boolean>(false);

  const handleMouseEnter = () => {
    SetHover(true);
  };

  const handleMouseLeave = () => {
    SetHover(false);
  };

  const onSelectedClick = (el: any) => {
    console.log(pokemon);
    setSelectedPokemon(pokemon);
    console.log(el);
    el.value = "";
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
      onClick={(el) =>
        onSelectedClick(el.currentTarget.parentElement?.firstChild)
      }
    >
      {pokemon.name}
    </div>
  );
}

export default AutofillTab;
