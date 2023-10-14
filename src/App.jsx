import { useContext } from "react";

import { Desktop, Dock, Login, TopBar } from "./components";
import { Context } from "./context";

function App() {
  const { isLogged, handleCloseOpt } = useContext(Context);

  return (
    <div onClick={handleCloseOpt}>
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
