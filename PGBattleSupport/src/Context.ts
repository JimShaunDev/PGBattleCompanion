import { createContext, useContext } from "react";
import { Type } from "./Interfaces/Types";

export type Context = {
  selectedType?: Type | undefined;
  setSelectedType: (c: Type | undefined) => void;
};

export const AppContext = createContext<Context>({
  selectedType: undefined, // set a default value
  setSelectedType: () => {},
});

export const useAppContext = () => useContext(AppContext);
