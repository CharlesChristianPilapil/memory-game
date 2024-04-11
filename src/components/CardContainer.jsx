import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { AppContext } from "../context/ContextProvider";

const CardContainer = () => {
  const { pokemonData, error, isLoading } = useContext(AppContext);

  let pokemon;

  if (pokemonData && pokemonData.results) pokemon = pokemonData.results;

  return (
    <div className="container">
      {isLoading && <p> Loading pokedex... </p>}
      {error && <p> Failed to load pokemon </p>}
      {pokemon && (
        <>
          {pokemon.map((pokemon, index) => (
            <PokemonCard key={index} url={pokemon.url} />
          ))}
        </>
      )}
    </div>
  );
};

export default CardContainer;
