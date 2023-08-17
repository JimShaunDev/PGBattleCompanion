import { AppContext } from "./Context";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Types from "./components/Types";
import TypeResult from "./components/TypeResult";
import { Type } from "./Interfaces/Types";

import "./App.css";
import { Pokemon } from "./Interfaces/Pokemon";
import SelectPokemon from "./components/SelectPokemon";
import { Team } from "./Interfaces/Team";
import TeamMember from "./components/TeamMember";

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

      let counter: number = 1;
      let all = [] as Pokemon[];
      const { results } = data;
      //console.log(results);
      results.map((item: any) => {
        const val = { id: counter, name: item.name.toUpperCase() } as Pokemon;
        counter += 1;
        all = [...all, val];
      });

      setAllPokemon(all);
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
      {selectedPokemon ? (
        <TeamMember member={selectedPokemon} />
      ) : (
        !loading && (
          <div className="container">
            <SelectPokemon />
          </div>
        )
      )}
      {/*
      <h1>Type Helper</h1>
      {!selectedType ? <Types /> : <TypeResult />}
        */}
    </AppContext.Provider>
  );
}

export default App;
