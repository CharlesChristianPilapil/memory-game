import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

const Navbar = () => {
  const { score, highestScore } = useContext(AppContext);

  return (
    <nav>
      <h1> Memory Game </h1>
      <div>
        <p> Score: ({score}) </p>
        <p> Highest Score: ({highestScore}) </p>
      </div>
    </nav>
  );
};

export default Navbar;