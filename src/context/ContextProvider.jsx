import { createContext, useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";

export const AppContext = createContext({
  score: null,
  highestScore: null,
  selectPokemon: () => {},
});

export default function AppContextProvider({ children }) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=12";
  const { data: pokemonData, error, isLoading } = useFetch(url);

  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const dialog = useRef();

  const getHighestScore = () => {
    const storedHighestScore = localStorage.getItem("highestScore");
    if (storedHighestScore !== null) {
      setHighestScore(parseInt(storedHighestScore));
    }
  };

  const updateHighestScore = () => {
    if (score > highestScore) {
      setHighestScore(score);
      localStorage.setItem("highestScore", score.toString());
    }
  };

  useEffect(() => {
    getHighestScore();
  }, []);

  useEffect(() => {
    if (pokemonData && pokemonData.results) {
      const shuffledData = shuffleArray([...pokemonData.results]);
      pokemonData.results = shuffledData;
    }
  }, [pokemonData]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


const selectPokemon = (data) => {
  const shuffledData = shuffleArray([...pokemonData.results]);
  pokemonData.results = shuffledData;

  let pokeData = [...selected, data];

  if (selected.includes(data)) {
    dialog.current.showModal();
    updateHighestScore();
    setPreviousScore(score);
    setScore(0);
    pokeData = [];
    setSelected(pokeData);
  } else {
    setScore(score + 1);
    setSelected(pokeData);
  }
};

  if (pokemonData) {
    const shuffle = shuffleArray([...pokemonData.results]);
    pokemonData.results = shuffle;
  }

  const ctxValue = {
    pokemonData,
    error,
    isLoading,
    selectPokemon,
    score,
    previousScore,
    highestScore,
    dialog,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
