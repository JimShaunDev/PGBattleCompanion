import { createContext, useContext } from "react";
import { Type } from "./Interfaces/Types";
import { Pokemon } from "./Interfaces/Pokemon";
import { Team } from "./Interfaces/Team";

export type Context = {
  selectedType?: Type | undefined;
  setSelectedType: (c: Type | undefined) => void;
  allPokemon?: Pokemon[];
  setAllPokemon: (c: Pokemon[]) => void;
  selectedPokemon?: Pokemon | undefined;
  setSelectedPokemon: (c: Pokemon) => void;
  selectedTeam: Team | undefined;
  setSelectedTeam: (c: Team) => void;
};

export const AppContext = createContext<Context>({
  selectedType: undefined, // set a default value
  setSelectedType: () => {},
  allPokemon: [],
  setAllPokemon: () => [],

  selectedPokemon: undefined,
  setSelectedPokemon: () => {},
  selectedTeam: undefined,
  setSelectedTeam: () => {},
});

export const useAppContext = () => useContext(AppContext);
