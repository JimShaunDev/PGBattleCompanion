import { AppContext } from "./Context";
import { useState } from "react";
import Header from "./components/Header";
import Types from "./components/Types";
import Test from "./components/Test";
import { Type } from "./Interfaces/Types";

import "./App.css";

function App() {
  const [selectedType, setSelectedType] = useState<Type | undefined>(undefined);

  return (
    <AppContext.Provider value={{ selectedType, setSelectedType }}>
      <Header title="PokemonGo Battle Support" />
      {!selectedType ? <Types /> : <Test />}
    </AppContext.Provider>
  );
}

export default App;
