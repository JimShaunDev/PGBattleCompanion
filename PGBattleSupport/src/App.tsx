import { AppContext } from "./Context";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Types from "./components/Types";
import Test from "./components/Test";
import { Type } from "./Interfaces/Types";

import "./App.css";
import { Pokemon } from "./Interfaces/Pokemon";
import SelectPokemon from "./components/SelectPokemon";
import { Team } from "./Interfaces/Team";

function App() {
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>();
  const [selectedType, setSelectedType] = useState<Type | undefined>(undefined);
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon").then(
        (response) => response.json()
      );

      console.log(data.results);
      const all = [] as Pokemon[];
      const demo = data.results.map((item: { name: any }) => {
        all.push({ id: 0, name: item.name } as Pokemon);
      });
      console.log(demo);
      setAllPokemon(demo);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
    setLoading(false);
  }, []);
  return (
    <AppContext.Provider
      value={{
        selectedType,
        setSelectedType,
        allPokemon,
        setAllPokemon,
        selectedPokemon,
        setSelectedPokemon,
        selectedTeam,
        setSelectedTeam,
      }}
    >
      <Header title="PokemonGo Battle Support" />
      {!loading && (
        <div className="container">
          <SelectPokemon />
        </div>
      )}
      <h1>Type Helper</h1>
      {!selectedType ? <Types /> : <Test />}
    </AppContext.Provider>
  );
}

export default App;
