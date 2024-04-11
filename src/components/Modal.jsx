import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { forwardRef } from "react";

const Modal = forwardRef(function Modal() {
  const { previousScore, dialog } = useContext(AppContext);

  let img =
    "https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg";

  return (
    <dialog ref={dialog}>
      <h1> Game Over</h1>
      <img src={img} alt="pikachu" />
      <h4> Your score: {previousScore} </h4>
      <form method="dialog">
        <button> Close </button>
      </form>
    </dialog>
  );
});

export default Modal;
