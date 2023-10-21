import { useContext } from "react";

import { Desktop, Dock, Login, TopBar } from "./components";
import { Context } from "./context";

function App() {
  const { isLogged, brightness, handleCloseOptTB } = useContext(Context);

  const style = {
    filter: `brightness(${brightness}%)`,
    transition: "filter 0.3s ease-in-out",
  };

  return (
    <div onClick={handleCloseOptTB} style={style}>
      {isLogged ? (
        <>
          <TopBar />
          <Desktop />
          <Dock />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
