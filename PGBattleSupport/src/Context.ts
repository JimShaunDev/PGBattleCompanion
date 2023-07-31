import { createContext, useContext } from "react";
import { Type } from "./Interfaces/Types";
import { Pokemon } from "./Interfaces/Pokemon";

export type Context = {
  selectedType?: Type | undefined;
  setSelectedType: (c: Type | undefined) => void;
  allPokemon?: Pokemon[];
  setAllPokemon: (c: Pokemon[]) => void;
};

export const AppContext = createContext<Context>({
  selectedType: undefined, // set a default value
  setSelectedType: () => {},
  allPokemon: [],
  setAllPokemon: () => [],
});

export const useAppContext = () => useContext(AppContext);
