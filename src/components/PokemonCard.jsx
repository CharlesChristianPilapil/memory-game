import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { AppContext } from "../context/ContextProvider";

const PokemonCard = ({ url }) => {
  const { selectPokemon } = useContext(AppContext);
  const { data, error } = useFetch(url);

  if (error) {
    return <p>Failed to load Pokemon data</p>;
  }

  if (!data) return;

  const type = data.types[0].type.name;

  return (
    <button className={`card ${type}`} onClick={() => selectPokemon(data.name)}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            backgroundColor: "aliceblue",
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <h4> {data.name.toUpperCase()} </h4>
        </div>
        <div className="pokemon-bg">
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
      </div>
    </button>
  );
};

export default PokemonCard;
