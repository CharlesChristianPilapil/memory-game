import CardContainer from "./components/CardContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import AppContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <AppContextProvider>
        <Modal />
        <header>
          <Navbar />
        </header>
        <main>
          <CardContainer />
        </main>
      </AppContextProvider>
    </>
  );
}

export default App;
