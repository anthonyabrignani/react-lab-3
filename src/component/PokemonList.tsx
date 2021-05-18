import { useEffect, useState } from "react";
import { Species } from "../model/pokemon-model";
import { fetchAllPokemon } from "../service/PokemonApiService";
import "./PokemonList.css";

function PokemonList() {
  const [ pokemon, setPokemon ] = useState<Species[]>([]);
  useEffect(() => {
    fetchAllPokemon().then(data => {
      setPokemon(data);
    });
  }, []);

  return (
    <div className="PokemonList">
      <h1>Pokemon List</h1>
      { pokemon.length === 0 ?
        <p>Loading data...</p> :
        <ol>
          {pokemon.map((pokemon) => 
            <li>{pokemon.name}</li>
          )}
        </ol> }
    </div>
  );
}

export default PokemonList;